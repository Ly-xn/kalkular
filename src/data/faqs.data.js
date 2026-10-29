/**
 * Base de datos de Preguntas Frecuentes (FAQ) de KalkulAR
 * Optimizadas para Featured Snippets de Google y sincronizadas con Schema.org FAQPage
 */

export const FAQS_DATA = [
  {
    id: 'precio-m2-pintor-2026',
    q: '¿Cuánto cobra un pintor por metro cuadrado (m²) en Argentina en 2026?',
    a: 'En Argentina (2026), pintar una pared interior con látex cuesta entre $3.500 y $6.000 ARS por m², con un promedio testigo de mercado de $4.500 ARS/m² para dos manos terminadas. El metro cuadrado de cielorraso promedia $5.300 ARS y la herrería $10.500 ARS por metro lineal. Reparaciones como enduido completo (+$5.500/m²), fisuras (+$1.500/m²) o manchas de moho (+$2.000/m²) se cobran como adicionales al costo base de mano de obra.'
  },
  {
    id: 'manos-de-pintura-necesarias',
    q: '¿Cuántas manos de pintura son necesarias realmente?',
    a: 'El estándar profesional recomendado por fabricantes líderes (Alba, Sherwin, Tersuave) es de 2 manos completas para lograr el poder cubritivo y la lavabilidad indicada. Solo se requiere una tercera mano si se pinta con tonos muy claros sobre paredes oscuras o si la superficie presenta absorción despareja por falta de fijador previo. Es fundamental respetar 3 a 4 horas de secado entre manos.'
  },
  {
    id: 'comprar-mercado-libre-vs-pintor',
    q: '¿Conviene comprar los materiales por Mercado Libre o que los compre el pintor?',
    a: 'Comprar vos mismo los materiales por Mercado Libre suele ahorrar entre un 15% y un 25% del costo total. Te asegurás marcas de primera calidad en Tiendas Oficiales, podés pagar en cuotas sin interés y recibís los pesados baldes de 20 litros en tu puerta sin pagar fletes extra. Cuando el pintor realiza las compras, es habitual que traslade un recargo por logística, acarreo y tiempo de gestión.'
  },
  {
    id: 'pintura-cielorraso-vs-pared',
    q: '¿Por qué el techo / cielorraso lleva una pintura distinta a las paredes?',
    a: 'El cielorraso requiere látex específico para techos porque tiene acabado ultra mate antirreflejo (no proyecta sombras de lámparas ni ondulaciones de la losa), máxima microporosidad para evaporar la condensación ambiental y alta concentración de aditivos fungicidas antihongos, especialmente críticos en baños y dormitorios.'
  },
  {
    id: 'cuando-usar-fijador-sellador',
    q: '¿Cómo saber si mis paredes necesitan fijador sellador al agua?',
    a: 'El fijador sellador al agua es obligatorio en tres situaciones: 1) Paredes de yeso virgen o revoque nuevo; 2) Áreas donde se aplicó enduido plástico (el enduido es hiperabsorbente y deja manchas si no se sella); 3) Paredes envejecidas que despiden polvillo blanco al tocarlas. Sella los poros e iguala la absorción para que la pintura rinda 100% de forma homogénea.'
  },
  {
    id: 'diferencia-latex-lavable-comun',
    q: '¿Cuál es la diferencia entre látex lavable y látex común para interiores?',
    a: 'El látex lavable contiene mayor concentración de polímeros y resinas acrílicas que forman una película elástica resistente al frote, permitiendo limpiar manchas domésticas con esponja y detergente neutro sin desgastar la pintura. El látex común tiene menor resistencia mecánica y al lavarse puede dejar aureolas o desprender pigmento.'
  },
  {
    id: 'calcular-manos-colores-oscuros',
    q: '¿Cómo calcular las manos de pintura sobre colores oscuros o paredes nuevas?',
    a: 'Para cubrir colores oscuros (rojo, gris topo, verde inglés) con blanco o pasteles se necesitan 3 manos de látex o 1 mano previa de fijador con tinte base más 2 manos de látex de alto poder cubritivo. En paredes nuevas (durlock o yeso), la regla técnica es: 1 mano de fijador sellador diluido (1:3 en agua) y 2 manos cruzadas de pintura de terminación.'
  },
  {
    id: 'jornal-pintor-dia-argentina',
    q: '¿Cuánto cobra un pintor por día (jornal de 8 horas) en Argentina en 2026?',
    a: 'En 2026, el jornal de un pintor oficial calificado en Argentina se ubica entre $35.000 y $55.000 ARS por jornada laboral de 8 horas, con un promedio de $40.000 ARS diarios. Los ayudantes cobran entre $22.000 y $30.000 ARS por día. El cobro por día se utiliza principalmente en obras con detalles intrincados, andamios o trabajos de albañilería previa.'
  },
  {
    id: 'litros-pintura-habitacion-3x3-4x4',
    q: '¿Cuántos litros de pintura se necesitan para una habitación de 3x3 o 4x4 metros?',
    a: 'Para una habitación estándar de 3x3 metros (27 m² de pared neta a 2 manos) se necesitan entre 7 y 8 litros de látex (1 balde de 10L o 2 latas de 4L) más 2 litros para el cielorraso. Una habitación de 4x4 metros (37 m² netos) requiere entre 12 y 14 litros de látex (1 balde de 10L más una lata de 4L, o 1 balde de 20L para reserva de retoques futuros).'
  },
  {
    id: 'como-usar-presupuesto-con-pintor',
    q: '¿Cómo puedo usar este presupuesto para acordar con mi pintor?',
    a: 'Podés descargar el presupuesto en PDF o enviarlo por WhatsApp con el desglose exacto de m² netos (restando puertas y ventanas) y el rango de costos testigo de mano de obra en ARS. Esto establece un marco de negociación técnico, transparente y objetivo donde ambas partes conocen las medidas reales y los rendimientos oficiales de fábrica.'
  }
];

/**
 * Base de datos de Preguntas Frecuentes (FAQ) de Climatización y Aires Acondicionados (2026/2027)
 */
export const AC_FAQS_DATA = [
  {
    id: 'calculo-frigorias-m2-m3-argentina',
    q: '¿Cómo se calculan las frigorías de un aire acondicionado por metro cuadrado y cúbico?',
    a: 'La fórmula técnica oficial empleada en Argentina multiplica el volumen de la habitación (Largo × Ancho × Alto en m³) por 50 frigorías/m³ (equivalente a 125 frigorías por m² en techos de 2.50m). Si el ambiente tiene losa expuesta en último piso (+15%), techo de chapa (+25%) o ventanal con sol directo del Norte u Oeste (+15%), se suman esos porcentajes para evitar que el compresor trabaje forzado.'
  },
  {
    id: 'precio-instalacion-aire-acondicionado-2026',
    q: '¿Cuánto cuesta la mano de obra para instalar un aire acondicionado en Argentina (2026/2027)?',
    a: 'Según el tarifario referencial de CACAAV (Cámara Argentina de Calefacción, Aire Acondicionado y Ventilación), la mano de obra de instalación básica en 2026/2027 promedia $155.000 ARS para equipos de 2.250 a 3.000 frigorías, $190.000 ARS para 4.500 frigorías y $225.000 ARS para 6.000 frigorías. Este valor cubre el trabajo del técnico matriculado hasta 3 metros lineales de interconexión y vacío con bomba.'
  },
  {
    id: 'que-incluye-kit-instalacion-3-metros',
    q: '¿Qué incluye el kit de instalación de 3 metros de aire acondicionado?',
    a: 'Un kit de instalación reglamentario de 3 metros incluye: 3 metros de caño de cobre de alta (1/4") y 3 metros de baja (3/8" o 1/2" según potencia), aislantes térmicos elastoméricos negros, 3.5 metros de cable subterráneo tipo taller TPR (5x1.5mm² o 5x2.5mm²), par de ménsulas pintadas en epoxi con tacos antivibratorios, manguera cristal de desagote, cinta PVC sin adhesivo y kit de tirafondos del 10.'
  },
  {
    id: 'equivalencia-frigorias-a-watts',
    q: '¿Cómo convertir frigorías a Watts (W) al comprar un aire acondicionado en Argentina?',
    a: 'En Argentina las etiquetas de eficiencia IRAM expresan la potencia en Watts térmicos (W). Para pasar de frigorías a Watts se multiplica por 1.163 (y para pasar de Watts a frigorías se divide por 1.163). Las equivalencias comerciales son: 2.250 fg = 2.600W | 3.000 fg = 3.400W a 3.550W | 4.500 fg = 5.100W a 5.300W | 6.000 fg = 6.300W a 6.800W.'
  },
  {
    id: 'por-que-exigen-3-metros-cano-y-bomba-vacio',
    q: '¿Por qué las marcas exigen mínimo 3 metros de cañería de cobre y bomba de vacío?',
    a: 'Fabricantes como BGH, Surrey, Samsung, LG y Philco exigen un recorrido mínimo de 2.5 a 3 metros de caño de cobre para amortiguar las vibraciones mecánicas del motocompresor y asegurar la correcta expansión del gas R410A/R32 (evitando ruidos o retorno de líquido). Además, el vacío con bomba mecánica durante 15 a 20 minutos extrae la humedad interna; omitirlo anula la garantía oficial.'
  },
  {
    id: 'diferencia-consumo-inverter-vs-comun',
    q: '¿Cuál es la diferencia de consumo eléctrico entre un aire Inverter y uno común (On/Off)?',
    a: 'Un aire acondicionado con tecnología Inverter Clase A++ regula electrónicamente la velocidad del compresor en lugar de apagarlo y encenderlo con picos de arranque constantes. Esto genera un ahorro real del 35% al 40% en la factura de luz en usos de más de 4 horas diarias, mantiene la temperatura estable sin ráfagas heladas y alarga la vida útil del equipo.'
  },
  {
    id: 'que-pasa-si-compro-menos-frigorias',
    q: '¿Qué pasa si compro un aire acondicionado con menos frigorías de las necesarias?',
    a: 'Un equipo subdimensionado nunca alcanza la temperatura seleccionada en días de más de 33°C, por lo que el compresor jamás corta y funciona al 100% sin descanso. Esto dispara el consumo eléctrico hasta un 40% más que un equipo de la capacidad correcta y provoca el desgaste prematuro o recalentamiento del motocompresor.'
  },
  {
    id: 'costo-metro-adicional-cano-y-altura',
    q: '¿Cuánto cuesta el metro adicional de caño de cobre y los trabajos en altura?',
    a: 'Cuando la distancia entre la unidad interior y la exterior supera los 3 metros básicos, el metro lineal adicional completo (caño de cobre + aislante + cable TPR + mano de obra) cuesta entre $35.000 y $44.000 ARS/m según el diámetro. Los trabajos en altura al vacío o fachada sin balcón suman alrededor de $65.000 ARS y el pase de viga de hormigón $38.000 ARS.'
  },
  {
    id: 'diametro-cano-segun-frigorias',
    q: '¿Qué diámetro de caño de cobre lleva un aire de 2250, 3000, 4500 y 6000 frigorías?',
    a: 'Los equipos Split de 2.250 y 3.000 frigorías (2600W a 3550W) utilizan caño de cobre de 1/4" (líquido) y 3/8" (succión) con ménsulas de 42 cm. En cambio, los equipos de 4.500 y 6.000 frigorías (5200W a 6500W) requieren caño de 1/4" y 1/2" (o 5/8" en algunos modelos de 6000 fg) y ménsulas reforzadas de 52 cm.'
  },
  {
    id: 'proteccion-electrica-20a-aire-acondicionado',
    q: '¿Es necesario instalar una llave térmica de 20A y protector de tensión?',
    a: 'Sí. Los equipos Split modernos en Argentina vienen provistos con ficha de 20 Amperes (patas más anchas que el enchufe común de 10A). Nunca debe usarse un adaptador triple porque se derrite por recalentamiento; corresponde instalar un tomacorriente normado de 20A con llave térmica dedicada y un protector digital de alta/baja tensión para resguardar la plaqueta electrónica ante cortes de luz.'
  }
];
