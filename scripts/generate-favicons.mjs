import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// Exact SVG Path from KalkulAR's original orange icon (viewBox 0 0 24 24, fill #ff6a00)
const ICON_PATH_D =
  'M18 4V2H6v2c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4v7c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-8 16H8v-5h2v5zm4 0h-2v-5h2v5zm4 0h-2v-5h2v5zM4 11V8c0-1.1.9-2 2-2v5H4zm14 0V6c1.1 0 2 .9 2 2v3h-2z';

const FILL_COLOR = { r: 0xff, g: 0x6a, b: 0x00 };

/**
 * Parses an SVG path string (supporting M, m, H, h, V, v, C, c, Z, z)
 * into an array of closed polygon contours by sampling cubic Beziers.
 */
function parseSvgPathToPolygons(d, bezierSteps = 48) {
  const tokenRegex = /([MmHhVvCcZz])|(-?(?:\d+\.?\d*|\.\d+))/g;
  const tokens = [];
  let match;
  while ((match = tokenRegex.exec(d)) !== null) {
    tokens.push(match[0]);
  }

  const polygons = [];
  let currentPoly = [];
  let cx = 0;
  let cy = 0;
  let startX = 0;
  let startY = 0;
  let i = 0;
  let cmd = '';

  const addPoint = (x, y) => {
    if (
      currentPoly.length === 0 ||
      Math.hypot(
        currentPoly[currentPoly.length - 1][0] - x,
        currentPoly[currentPoly.length - 1][1] - y
      ) > 1e-6
    ) {
      currentPoly.push([x, y]);
    }
  };

  while (i < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[i])) {
      cmd = tokens[i];
      i++;
    }

    switch (cmd) {
      case 'M': {
        if (currentPoly.length > 0) polygons.push(currentPoly);
        currentPoly = [];
        cx = parseFloat(tokens[i++]);
        cy = parseFloat(tokens[i++]);
        startX = cx;
        startY = cy;
        addPoint(cx, cy);
        break;
      }
      case 'm': {
        if (currentPoly.length > 0) polygons.push(currentPoly);
        currentPoly = [];
        cx += parseFloat(tokens[i++]);
        cy += parseFloat(tokens[i++]);
        startX = cx;
        startY = cy;
        addPoint(cx, cy);
        break;
      }
      case 'H': {
        cx = parseFloat(tokens[i++]);
        addPoint(cx, cy);
        break;
      }
      case 'h': {
        cx += parseFloat(tokens[i++]);
        addPoint(cx, cy);
        break;
      }
      case 'V': {
        cy = parseFloat(tokens[i++]);
        addPoint(cx, cy);
        break;
      }
      case 'v': {
        cy += parseFloat(tokens[i++]);
        addPoint(cx, cy);
        break;
      }
      case 'c': {
        const x1 = cx + parseFloat(tokens[i++]);
        const y1 = cy + parseFloat(tokens[i++]);
        const x2 = cx + parseFloat(tokens[i++]);
        const y2 = cy + parseFloat(tokens[i++]);
        const ex = cx + parseFloat(tokens[i++]);
        const ey = cy + parseFloat(tokens[i++]);
        for (let s = 1; s <= bezierSteps; s++) {
          const t = s / bezierSteps;
          const mt = 1 - t;
          const px =
            mt * mt * mt * cx +
            3 * mt * mt * t * x1 +
            3 * mt * t * t * x2 +
            t * t * t * ex;
          const py =
            mt * mt * mt * cy +
            3 * mt * mt * t * y1 +
            3 * mt * t * t * y2 +
            t * t * t * ey;
          addPoint(px, py);
        }
        cx = ex;
        cy = ey;
        break;
      }
      case 'Z':
      case 'z': {
        if (currentPoly.length > 0) {
          polygons.push(currentPoly);
          currentPoly = [];
        }
        cx = startX;
        cy = startY;
        break;
      }
      default:
        throw new Error(`Unsupported SVG command: ${cmd}`);
    }
  }

  if (currentPoly.length > 0) {
    polygons.push(currentPoly);
  }

  return polygons;
}

/**
 * Even-odd point-in-polygon check across all subpaths
 */
function isPointInsidePolygons(x, y, polygons) {
  let inside = false;
  for (const poly of polygons) {
    const n = poly.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = poly[i][0];
      const yi = poly[i][1];
      const xj = poly[j][0];
      const yj = poly[j][1];

      const intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
  }
  return inside;
}

// Precompute CRC32 table for PNG chunks
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makePngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcInput = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(crcInput), 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

/**
 * Renders the 24x24 SVG polygons into an anti-aliased RGBA PNG buffer of size x size
 */
function renderIconPng(size, polygons, supersample = 8) {
  const stride = size * 4 + 1;
  const rawData = Buffer.alloc(stride * size);
  const subSamples = supersample * supersample;

  for (let py = 0; py < size; py++) {
    const rowOffset = py * stride;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let px = 0; px < size; px++) {
      let hits = 0;
      for (let sy = 0; sy < supersample; sy++) {
        const vy = ((py + (sy + 0.5) / supersample) / size) * 24;
        for (let sx = 0; sx < supersample; sx++) {
          const vx = ((px + (sx + 0.5) / supersample) / size) * 24;
          if (isPointInsidePolygons(vx, vy, polygons)) {
            hits++;
          }
        }
      }

      const pixelOffset = rowOffset + 1 + px * 4;
      if (hits > 0) {
        const alpha = Math.round((hits / subSamples) * 255);
        rawData[pixelOffset] = FILL_COLOR.r;
        rawData[pixelOffset + 1] = FILL_COLOR.g;
        rawData[pixelOffset + 2] = FILL_COLOR.b;
        rawData[pixelOffset + 3] = alpha;
      }
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // RGBA color type
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const compressedData = zlib.deflateSync(rawData, { level: 9 });

  return Buffer.concat([
    signature,
    makePngChunk('IHDR', ihdr),
    makePngChunk('IDAT', compressedData),
    makePngChunk('IEND', Buffer.alloc(0))
  ]);
}

const polygons = parseSvgPathToPolygons(ICON_PATH_D, 64);

const targets = [
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'favicon-96x96.png', size: 96 },
  { file: 'apple-touch-icon.png', size: 180 }
];

console.log('🎨 Generando íconos PNG físicos de KalkulAR para Google Search...');

for (const target of targets) {
  const outPath = path.join(publicDir, target.file);
  const pngBuffer = renderIconPng(target.size, polygons, 8);
  fs.writeFileSync(outPath, pngBuffer);
  console.log(`  ✅ Generado: public/${target.file} (${target.size}x${target.size}px, ${pngBuffer.length} bytes)`);
}
