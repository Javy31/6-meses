const inicio = new Date("2025-11-05T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerText =
    `Mi amor por ti comenzó hace ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);



/* FLORES */
const contenedor = document.querySelector(".flores");

for (let i = 0; i < 30; i++) {
  let flor = document.createElement("span");
  flor.innerText = "🌸";

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (3 + Math.random() * 5) + "s";

  contenedor.appendChild(flor);
}