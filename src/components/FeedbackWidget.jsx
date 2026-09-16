import React, { useState, useEffect, useRef } from 'react';
import { MessageSquarePlus, X, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Bug, ThumbsUp } from 'lucide-react';

/**
 * Endpoint de Formspree:
 * Podés pasar la URL completa como prop 'endpoint' o configurarla aquí directamente.
 * Ejemplo: 'https://formspree.io/f/xanyzwba'
 */
const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjykbojp';

export function FeedbackWidget({ endpoint = DEFAULT_FORMSPREE_ENDPOINT }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('sugerencia'); // 'sugerencia' | 'error' | 'opinion'
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const popoverRef = useRef(null);

  // Cerrar con Escape o al hacer clic afuera
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && !e.target.closest('#btn-open-feedback')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = {
        tipo: category,
        mensaje: message,
        pagina: window.location.href,
        fecha: new Date().toLocaleString('es-AR'),
      };

      // Si el usuario proporcionó un email válido, lo agregamos para permitir respuesta directa desde Formspree
      if (email.trim()) {
        payload.email = email.trim();
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setMessage('');
          setEmail('');
        }, 2500);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMsg(data?.error || 'Hubo un inconveniente al enviar. Por favor probá de nuevo.');
      }
    } catch {
      setErrorMsg('Error de conexión al enviar. Verificá tu red e intentá de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Botón Flotante (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          id="btn-open-feedback"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-2 rounded-full px-4 py-3 text-xs md:text-sm font-bold text-white shadow-[0_8px_30px_-5px_rgba(255,106,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/20 ${
            isOpen
              ? 'bg-slate-800 dark:bg-slate-700 shadow-slate-900/50'
              : 'bg-gradient-to-r from-[#ff6a00] to-[#ea580c] hover:shadow-[0_10px_35px_-5px_rgba(255,106,0,0.7)]'
          }`}
          aria-label={isOpen ? 'Cerrar ventana de sugerencias' : 'Dejar sugerencia o comentario'}
          title="Dejanos tu sugerencia o comentario"
        >
          {isOpen ? (
            <>
              <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              <span>Cerrar</span>
            </>
          ) : (
            <>
              <MessageSquarePlus className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-extrabold tracking-wide">¿Sugerencias?</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Popover del Formulario Flotante */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-sm rounded-3xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] animate-fade-in transition-all text-slate-800 dark:text-slate-100"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff6a00]/15 text-[#ff7d1a] border border-[#ff6a00]/30">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  Tu Opinión nos Ayuda
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Sin registro ni complicaciones.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Contenido / Estado de Éxito */}
          {isSuccess ? (
            <div className="py-8 text-center space-y-3 animate-fade-in">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                Muchas gracias, hemos recibido tu mensaje
              </h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
              {/* Selector Rápido de Categoría (Cero Fricción) */}
              <div>
                <span className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  ¿De qué se trata?
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCategory('sugerencia')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      category === 'sugerencia'
                        ? 'bg-[#ff6a00] text-white shadow-sm shadow-[#ff6a00]/30'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Idea</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('error')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      category === 'error'
                        ? 'bg-[#ff6a00] text-white shadow-sm shadow-[#ff6a00]/30'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <Bug className="h-3 w-3" />
                    <span>Error</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('opinion')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      category === 'opinion'
                        ? 'bg-[#ff6a00] text-white shadow-sm shadow-[#ff6a00]/30'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <ThumbsUp className="h-3 w-3" />
                    <span>Opinión</span>
                  </button>
                </div>
              </div>

              {/* Mensaje / Sugerencia (Campo Principal Obligatorio) */}
              <div>
                <label htmlFor="feedback-message" className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tu mensaje <span className="text-[#ff6a00]">*</span>
                </label>
                <textarea
                  id="feedback-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribí acá tu sugerencia, qué agregarías o qué podríamos mejorar..."
                  className="w-full resize-none rounded-2xl border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/5 p-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] focus:outline-none transition-colors"
                />
              </div>

              {/* Email (Opcional - Cero Fricción) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="feedback-email" className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Tu correo electrónico
                  </label>
                  <span className="text-[10px] text-slate-400 font-medium">Opcional</span>
                </div>
                <input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Por si querés que te respondamos"
                  className="w-full rounded-xl border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] focus:outline-none transition-colors"
                />
              </div>

              {/* Alerta de Error si ocurre */}
              {errorMsg && (
                <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-2.5 text-[11px] text-red-600 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] py-2.5 text-xs font-bold text-white shadow-md shadow-[#ff6a00]/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Enviar Sugerencia</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
