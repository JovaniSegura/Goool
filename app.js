let circuloCentro__btn = document.querySelector(".circuloCentro__btn-btn");
let flecha = document.querySelector(".flecha");
let rotacionIzq = "rotate(-55deg)";
let rotacionCero = "rotate(0deg)";
let rotacionDer = "rotate(55deg)";
let rotacionAleatoria;
let mensaje = document.querySelector('.mensaje')
let mensajeP = document.querySelector('.mensaje-p')
let balon01 = document.querySelector('.balon01')
let balon02 = document.querySelector('.balon02')

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
    if ((i < 1)) {
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

function ganador() {
  if (flecha.style.transform == rotacionIzq){
    balon01.style.display = 'inline'
  } else {
    balon02.style.display = 'inline'
  }
}

function reload() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function esperar3segundos() {
  setTimeout(() => {
    mensajeP.textContent = '3'
    mensajeP.style.fontSize = '33px'
    circuloCentro__btn.value = "Patear";
    mensajeP.style.color = 'red'
    circuloCentro__btn.style.display = "inline";
    tiempoPat();
  }, 2000);
}

function mensajeParrafo(){
  mensajeP.textContent = 'Espera...'
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
    ganador();
    reload();
  }
});