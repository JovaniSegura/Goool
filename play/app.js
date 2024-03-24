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
let mensajeContadorP = document.querySelector('.mensajeContadorP')
let balon01 = document.querySelector(".balon01");
let balon02 = document.querySelector(".balon02");
let cancha2 = document.querySelector('.cancha2')
let logoEquipoLocal = document.querySelectorAll('.logoEquipoLocal');
let logoEquipoVisit = document.querySelectorAll('.logoEquipoVisit');
let nombreMostrado = document.querySelectorAll('.nombreMostrado')
let textoLogoEq = document.querySelectorAll('.textoLogoEq')
let ladoIzq = document.querySelector('.ladoIzq')
let ladoDer = document.querySelector('.ladoDer')
let anotacion = document.querySelectorAll('.anotacion')
let jifIzq_img = document.querySelectorAll('.jifIzq_img')
let jifDer_img = document.querySelectorAll('.jifDer_img')

/* ---------- Session Storage ---------- */
let equipoLocal = sessionStorage.getItem('Equipo Local');
let equipoVisit = sessionStorage.getItem('Equipo Visit');
let nombreLocal = sessionStorage.getItem('Nombre Local');
let nombreVisit = sessionStorage.getItem('Nombre Visit');

let formulario = ['Nombre Local', 'Nombre Visit', 'Equipo Local', 'Equipo Visit'];
if (formulario.some(formu => sessionStorage.getItem(formu) === null)) {
  window.location.href = "../index.html";
  formulario.forEach(formu => sessionStorage.removeItem(formu));
}

/* -------------- Objetos -------------- */
let equipos = {
  'real_madrid': {
    nombre: 'Real Madrid',
    gradient: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 32%, rgba(233,235,255,1) 42%, rgba(200,202,244,1) 50%, rgba(144,147,230,1) 59%, rgba(95,100,232,1) 66%, rgba(68,74,228,1) 82%, rgba(35,42,224,1) 100%)'
  },
  'barcelona': {
    nombre: 'Barcelona',
    gradient: 'linear-gradient(180deg, rgba(0,22,255,1) 0%, rgba(120,49,154,1) 100%)'
  }
};

/* ----------- Equipo y Logo ----------- */
textoLogoEq[0].textContent = equipos[equipoLocal].nombre;
textoLogoEq[1].textContent = equipos[equipoVisit].nombre;

ladoIzq.style.background = equipos[equipoLocal].gradient;
ladoDer.style.background = equipos[equipoVisit].gradient;

function mostrarLogo(equipo, logos) {
  logos[0].style.display = (equipo === 'real_madrid') ? 'inline' : 'none';
  logos[1].style.display = (equipo === 'barcelona') ? 'inline' : 'none';
}

mostrarLogo(equipoLocal, logoEquipoLocal);
mostrarLogo(equipoVisit, logoEquipoVisit);

nombreMostrado[0].textContent = nombreLocal
nombreMostrado[1].textContent = nombreVisit

/* -------------- Pateadas ------------- */
let incTiro = Number(sessionStorage.getItem('Nro Tiro')) || 1;

function nroTiro(){
  incTiro += 1;
  sessionStorage.setItem("Nro Tiro", incTiro);
}

if (incTiro <= 20) {
  let tiro = Math.ceil(incTiro / 2);

  let jugador;
  if (incTiro % 2 === 0){
    jugador = 1 
  } else {
    jugador = 0;
  }

/* -------------- Mensajes ------------- */
  mensaje.style.setProperty('--mensaje-before', `"${nombreMostrado[jugador].textContent}"`);
  mensaje.style.setProperty('--mensaje-after', `"Tienes 3 segundos para patear"`);
  mensajeContadorP.style.setProperty('--mensaje-before', `"Tiro ${tiro} de 10"`);
} else {
  mensaje.style.setProperty('--mensaje-before', `""`);
  let mensajeFinal = mensaje.style.setProperty('--mensaje-after', `""`);
  if (mensajeFinal === mensajeFinal){
    let jugarDeNuevo
    circuloCentro__btn.style.display = 'none'
    setTimeout(() => {
      circuloCentro__btn.style.display = 'inline'
      jugarDeNuevo = circuloCentro__btn.value = 'Deseas volver a jugar?'
    }, 3000);
    if (jugarDeNuevo === jugarDeNuevo){
        circuloCentro__btn.addEventListener('click', () => {
          sessionStorage.setItem('Goles Izq', 0);
          sessionStorage.setItem('Goles Der', 0);
          sessionStorage.setItem('Nro Tiro', 0);

          window.location.reload();

          golIzq = 0;
          golDer = 0;
          incTiro = 0;
      })
    }
  }
  mensajeContadorP.style.setProperty('--mensaje-before', `""`);
}

mensaje.style.fontSize = "1.3vw";

function mensajeParrafo() {
  mensaje.style.setProperty('--mensaje-before', '""');
  mensaje.style.setProperty('--mensaje-after', '"Espera..."');
  mensajeContadorP.style.setProperty('--mensaje-before', `""`);
  mensaje.style.fontSize = "2vw";
}

/* ------------ Linea de gol ----------- */
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

/* --------------- Tiempo -------------- */
function tiempoPat() {
  let i = 2;
  intervalo = setInterval(() => {
    if (i < 1) {
      clearInterval(intervalo);
      detenerRotacionAleat();
      reload();
      [linea1, linea2].forEach(lineas => {lineas.style.display = 'none'})
      flecha.style.transform = rotacionCero;
      mensaje.style.setProperty('--mensaje-after', '"Fin"');
      circuloCentro__btn.style.display = 'none'
    } else {
      mensaje.style.setProperty('--mensaje-after', `"${i}"`);
      i--;
    }
  }, 1000);
}

function detenerRotacionAleat() {
  clearTimeout(rotacionAleatoria);
}

let golIzq = Number(sessionStorage.getItem('Goles Izq')) || 0;
let golDer = Number(sessionStorage.getItem('Goles Der')) || 0;

function rotacionBalon() {
  if (flecha.style.transform == rotacionIzq) {
    golDer += 1;
    sessionStorage.setItem("Goles Der", golDer);
    anotacion[1].textContent = golDer
    setTimeout(() => {
      balon01.style.display = "inline";
      jifIzq_img[1].style.display = 'inline'
      jifDer_img[0].style.display = 'inline'
    }, 750);
  } else {
    golIzq += 1;
    sessionStorage.setItem("Goles Izq", golIzq);
    anotacion[0].textContent = golIzq
    setTimeout(() => {
      balon02.style.display = "inline";
      jifIzq_img[0].style.display = 'inline'
      jifDer_img[1].style.display = 'inline'
    }, 750);
  }
}

if (incTiro > 20){
  if (golIzq > golDer){
    mensaje.style.setProperty('--mensaje-after', `"El juego a finalizado, el ganador es: ${nombreLocal}"`);
  } else if (golDer > golIzq) {
    mensaje.style.setProperty('--mensaje-after', `"El juego a finalizado, el ganador es: ${nombreVisit}"`);
  } else {
    mensaje.style.setProperty('--mensaje-after', `"El juego a finalizado empatado"`);
  }
}

function reload() {
  setTimeout(() => {
    window.location.reload();
    nroTiro();
  }, 3000);
}

window.onload = function() {
  golIzq = Number(sessionStorage.getItem('Goles Izq')) || 0;
  golDer = Number(sessionStorage.getItem('Goles Der')) || 0;
  anotacion[1].textContent = golDer
  anotacion[0].textContent = golIzq
};

function esperar3segundos() {
  setTimeout(() => {
    mensaje.style.setProperty('--mensaje-after', '"3"');
    mensaje.style.fontSize = "3.3vw";
    circuloCentro__btn.value = "Patear";
    mensaje.style.color = "red";
    circuloCentro__btn.style.display = "inline";
    tiempoPat();
  }, 2000);
}

/* ---------- funcionalidades ---------- */
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
    circuloCentro__btn.style.display = 'none';
  }
});