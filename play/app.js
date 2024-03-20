let circuloCentro__btn = document.querySelector(".circuloCentro__btn-btn");
let linea1 = document.querySelector(".linea1");
let linea2 = document.querySelector(".linea2");
let flecha = document.querySelector(".flecha");
let flechaBalon = document.querySelector('.flechaBalon')
let rotacionIzq = "rotate(-55deg)";
let rotacionCero = "rotate(0deg)";
let rotacionDer = "rotate(55deg)";
let rotacionAleatoria;
let mensaje = document.querySelector(".mensaje");
let mensajeP = document.querySelector(".mensaje-p");
let balon01 = document.querySelector(".balon01");
let balon02 = document.querySelector(".balon02");
let cancha2 = document.querySelector('.cancha2')
let logoEquipoLocal = document.querySelectorAll('.logoEquipoLocal');
let logoEquipoVisit = document.querySelectorAll('.logoEquipoVisit');
let nombreMostrado = document.querySelectorAll('.nombreMostrado')

/* ---------- Session Storage ---------- */
let equipoLocal = sessionStorage.getItem('Equipo Local');
let equipoVisit = sessionStorage.getItem('Equipo Visit');
let nombreLocal = sessionStorage.getItem('Nombre Local')
let nombreVisit = sessionStorage.getItem('Nombre Visit')

function mostrarLogo(equipo, logo) {
  if(equipo === 'real_madrid'){
    logo[0].style.display = 'inline';
    logo[1].style.display = 'none';
  } else {
    logo[1].style.display = 'inline';
    logo[0].style.display = 'none';
  }
}

mostrarLogo(equipoLocal, logoEquipoLocal);
mostrarLogo(equipoVisit, logoEquipoVisit);

nombreMostrado[0].textContent = nombreLocal
nombreMostrado[1].textContent = nombreVisit

/* -------- Funcionalidad Juego -------- */
function ajustarLinea() {
  let alto = window.innerHeight * 0.5;
  let ancho = window.innerWidth * 0.4;
  let longitud = Math.sqrt(alto * alto + ancho * ancho);
  let angulo1 = (Math.atan2(-alto, -ancho) * 180) / Math.PI;
  let angulo2 = (Math.atan2(-alto, ancho) * 180) / Math.PI;
  function rotaN() {
    let rotacionNumero = Math.floor(Math.random() * 2);
    if (rotacionNumero === 0) {
      flecha.style.transform = rotacionIzq;
      lineaIzq(longitud, angulo1);
    } else {
      flecha.style.transform = rotacionDer;
      lineaDer(longitud, angulo2);
    }
    rotacionAleatoria = setTimeout(rotaN, 50);
  }
  rotaN();
}
window.onresize = ajustarLinea;

function lineaIzq(longitud, angulo1) {
  linea2.style.display = "none";
  linea1.style.width = longitud + "px";
  linea1.style.transform = "rotate(" + angulo1 + "deg)";
  linea1.style.display = "inline";
  linea1.classList.add("mover");
  setTimeout(() => {
    linea1.classList.remove("mover");
  }, 100);
}

function lineaDer(longitud, angulo2) {
  linea1.style.display = "none";
  linea2.style.width = longitud + "px";
  linea2.style.transform = "rotate(" + angulo2 + "deg)";
  linea2.style.display = "inline";
  linea2.classList.add("mover");
  setTimeout(() => {
    linea2.classList.remove("mover");
  }, 100);
}

let intervalo;

function tiempoPat() {
  let i = 2;
  intervalo = setInterval(() => {
    if (i < 1) {
      clearInterval(intervalo);
      detenerRotacionAleat();
      reload();
      [linea1, linea2].forEach(lineas => {lineas.style.display = 'none'})
      flecha.style.transform = rotacionCero;
      mensajeP.textContent = "Fin";
    } else {
      mensajeP.textContent = i;
      i--;
    }
  }, 1000);
}

function detenerRotacionAleat() {
  clearTimeout(rotacionAleatoria);
}

function rotacionBalon() {
  if (flecha.style.transform == rotacionIzq) {
    setTimeout(() => {
      balon01.style.display = "inline";
    }, 750);
  } else {
    setTimeout(() => {
      balon02.style.display = "inline";
    }, 750);
  }
}

function ganador() {}

function reload() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function esperar3segundos() {
  setTimeout(() => {
    mensajeP.textContent = "3";
    mensajeP.style.fontSize = "33px";
    circuloCentro__btn.value = "Patear";
    mensajeP.style.color = "red";
    circuloCentro__btn.style.display = "inline";
    tiempoPat();
  }, 2000);
}

function mensajeParrafo() {
  mensajeP.textContent = "Espera...";
  mensajeP.style.fontSize = "30px";
}

// prettier-ignore
circuloCentro__btn.addEventListener("click", () => {
  if (circuloCentro__btn.value !== "Patear") {
    mensajeParrafo();
    ajustarLinea();
    [circuloCentro__btn, linea1, linea2].forEach(e => {e.style.display = "none";});
    esperar3segundos();
  } else {
    detenerRotacionAleat();
    clearInterval(intervalo);
    rotacionBalon();
    reload();
    flechaBalon.style.display = 'none'
    cancha2.style.zIndex = '2'
  }
});
