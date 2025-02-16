import '@material-tailwind/html/scripts/ripple.js';

export function initializeRipple() {
  if (typeof (window as any).ripple !== 'undefined') {
    (window as any).ripple.initialize();
  } else {
    console.warn('ripple.js no está disponible.');
  }
}