let circuloCentro__btn = document.querySelector(".circuloCentro__btn-btn");
let flecha = document.querySelector(".flecha");
let rotacionIzq = "rotate(-55deg)";
let rotacionCero = "rotate(0deg)";
let rotacionDer = "rotate(55deg)";
let rotacionAleatoria;
let mensaje = document.querySelector('.mensaje')
let mensajeP = document.querySelector('.mensaje-p')

let intervalo

function rotaN() {
  let rotacionNumero = Math.floor(Math.random() * 2);
  if (rotacionNumero === 0) {
    flecha.style.transform = rotacionIzq;
  } else {
    flecha.style.transform = rotacionDer;
  }
  rotacionAleatoria = setTimeout(rotaN, 50);
}

function tiempoPat() {
  let i = 2;
  intervalo = setInterval(() => {
    if ((i < 0)) {
      clearInterval(intervalo);
      detenerRotacionAleat();
      reload()
      flecha.style.transform = rotacionCero
      mensajeP.textContent = 'Fin'
    } else {
      mensajeP.textContent = i;
      i--;
    }
  }, 1000);
}

function detenerRotacionAleat() {
  clearTimeout(rotacionAleatoria);
}

function verificarGanadaPerdida() {}

function reload() {
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}

function esperar3segundos() {
  setTimeout(() => {
    mensajeP.textContent = '3'
    mensajeP.style.fontSize = '33px'
    circuloCentro__btn.value = "Patear";
    circuloCentro__btn.style.display = "inline";
    tiempoPat();
  }, 2000);
}

function mensajeParrafo(){
  mensajeP.textContent = 'Espera...'
  mensajeP.style.color = 'red'
  mensajeP.style.fontSize = '30px'
}

circuloCentro__btn.addEventListener("click", () => {
  if (circuloCentro__btn.value !== "Patear") {
    mensajeParrafo()
    rotaN();
    circuloCentro__btn.style.display = "none";
    esperar3segundos();
  } else {
    circuloCentro__btn.style.zIndez
    detenerRotacionAleat();
    clearInterval(intervalo);
    verificarGanadaPerdida();
    reload();
  }
});