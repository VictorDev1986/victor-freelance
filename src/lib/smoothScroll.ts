// Utilidad de scroll suave con easing y soporte de offset
// Evita depender solo de scroll-behavior: smooth para permitir easing personalizado y compensar navbar fijo.

export interface SmoothScrollOptions {
  offset?: number;      // Desplazamiento adicional (positivo desplaza más arriba)
  duration?: number;    // Duración en ms
  easing?: (t: number) => number; // Función de easing
  onDone?: () => void;  // Callback al terminar
}

// Easing por defecto (easeInOutQuad)
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export function smoothScrollTo(targetY: number, opts: SmoothScrollOptions = {}) {
  if (typeof window === 'undefined') return;
  const { offset = 0, duration = 600, easing = easeInOutQuad, onDone } = opts;
  const startY = window.pageYOffset;
  const distance = targetY - offset - startY;
  if (Math.abs(distance) < 2) {
    if (onDone) onDone();
    return;
  }
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easing(progress);
    window.scrollTo(0, startY + distance * eased);
    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else if (onDone) {
      onDone();
    }
  }
  requestAnimationFrame(step);
}

export function smoothScrollIntoView(element: HTMLElement | null, opts: SmoothScrollOptions = {}) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const y = rect.top + window.pageYOffset;
  smoothScrollTo(y, opts);
}

// Helper para intentar varias veces hasta que el elemento exista (cuando navegamos entre rutas)
export function scrollToIdWhenReady(id: string, tries = 30, interval = 40, opts: SmoothScrollOptions = {}) {
  let attempts = 0;
  const timer = setInterval(() => {
    const el = document.getElementById(id);
    if (el) {
      clearInterval(timer);
      smoothScrollIntoView(el, opts);
    } else if (++attempts >= tries) {
      clearInterval(timer);
    }
  }, interval);
}
