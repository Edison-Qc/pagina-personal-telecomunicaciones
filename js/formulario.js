// Formulario de práctica: registra la última consulta solo en esta sesión.
const formulario = document.querySelector('#consulta');
const estado = document.querySelector('#estado');
formulario.querySelector('button').disabled = false;
const consultasDeEstaPagina = [];

formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!formulario.reportValidity()) return;

  const consulta = Object.fromEntries(new FormData(formulario));
  // Si el navegador bloquea sessionStorage, la prueba queda en memoria.
  try {
    sessionStorage.setItem('pa2-ultima-consulta', JSON.stringify(consulta));
  } catch {
    consultasDeEstaPagina[0] = consulta;
  }

  formulario.reset();
  estado.textContent = 'Enviado (prueba).';
});

formulario.addEventListener('input', () => {
  estado.textContent = '';
});
