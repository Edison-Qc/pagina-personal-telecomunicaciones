// Las coordenadas iniciales corresponden al dibujo de 900 × 300.
const imagen = document.querySelector('#imagen-red');
const zonas = Array.from(document.querySelectorAll('#mapa-red area'));
const originales = zonas.map(zona => zona.coords.split(',').map(Number));

function ajustarMapa() {
  const escalaX = imagen.clientWidth / 900;
  const escalaY = imagen.clientHeight / 300;
  if (!escalaX || !escalaY) return;
  zonas.forEach((zona, i) => {
    zona.coords = originales[i].map((v, j) =>
      Math.round(v * (j % 2 === 0 ? escalaX : escalaY))
    ).join(',');
  });
}

imagen.addEventListener('load', ajustarMapa);
window.addEventListener('resize', ajustarMapa);
ajustarMapa();
