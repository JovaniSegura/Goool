let nombreIzq = document.getElementById("nombreIzq");
let nombreDer = document.getElementById("nombreDer");
let equipoIzq = document.getElementById("equipoIzq");
let equipoDer = document.getElementById("equipoDer");
let botonJugar = document.querySelector(".botonJugar");
let infoRegNombre = document.querySelectorAll(".infoRegNombre");
let infoEscEquipo = document.querySelectorAll(".infoEscEquipo");
let equiRealIzq = document.querySelector(".equiRealIzq");
let equiBarcaIzq = document.querySelector(".equiBarcaIzq");
let equiRealDer = document.querySelector(".equiRealDer");
let equiBarcaDer = document.querySelector(".equiBarcaDer");

function validarCampos() {
  if (
    nombreIzq.value !== "" &&
    nombreDer.value !== "" &&
    equipoIzq.value !== "" &&
    equipoDer.value !== ""
  ) {
    botonJugar.style.display = "inline";
  } else {
    botonJugar.style.display = "none";
  }
}

nombreIzq.addEventListener("input", () => {
  if (nombreIzq.value.match(/[a-zA-ZñÑ]/)) {
    if (nombreIzq.value.toLowerCase() === nombreDer.value.toLowerCase()) {
      infoRegNombre[0].textContent = "Por favor escoge un nombre diferente";
      infoRegNombre[0].style.color = "red";
      nombreIzq.value = "";
    } else {
      infoRegNombre[0].textContent = "Nombre OK";
      sessionStorage.setItem("Nombre Local", nombreIzq.value);
      infoRegNombre[0].style.color = "green";
    }
  } else {
    infoRegNombre[0].textContent = "Nombre Incorrecto";
    infoRegNombre[0].style.color = "red";
  }
  validarCampos();
});

nombreDer.addEventListener("input", () => {
  if (nombreDer.value.match(/[a-zA-ZñÑ]/)) {
    if (nombreDer.value.toLowerCase() === nombreIzq.value.toLowerCase()) {
      infoRegNombre[1].textContent = "Por favor escoge un nombre diferente";
      infoRegNombre[1].style.color = "red";
      nombreDer.value = "";
    } else {
      infoRegNombre[1].textContent = "Nombre OK";
      sessionStorage.setItem("Nombre Visit", nombreDer.value);
      infoRegNombre[1].style.color = "green";
    }
  } else {
    infoRegNombre[1].textContent = "Nombre Incorrecto";
    infoRegNombre[1].style.color = "red";
  }
  validarCampos();
});

equipoIzq.addEventListener("change", () => {
  if (equipoIzq.value === equipoDer.value) {
    infoEscEquipo[0].textContent = "Los equipos no pueden ser los mismos";
    infoEscEquipo[0].style.color = "red";
    equipoIzq.value = "";
    equiRealIzq.style.display = "none";
    equiBarcaIzq.style.display = "none";
  } else {
    infoEscEquipo[0].textContent = "Equipo OK";
    sessionStorage.setItem("Equipo Local", equipoIzq.value);
    infoEscEquipo[0].style.color = "green";
    if (equipoIzq.value === "real_madrid") {
      equiRealIzq.style.display = "inline";
      equiBarcaIzq.style.display = "none";
    } else {
      equiBarcaIzq.style.display = "inline";
      equiRealIzq.style.display = "none";
    }
  }
  validarCampos();
});

equipoDer.addEventListener("change", () => {
  if (equipoDer.value === equipoIzq.value) {
    infoEscEquipo[1].textContent = "Los equipos no pueden ser los mismos";
    infoEscEquipo[1].style.color = "red";
    equipoDer.value = "";
    equiRealDer.style.display = "none";
    equiBarcaDer.style.display = "none";
  } else {
    infoEscEquipo[1].textContent = "Equipo OK";
    sessionStorage.setItem("Equipo Visit", equipoDer.value);
    infoEscEquipo[1].style.color = "green";
    if (equipoDer.value === "real_madrid") {
      equiRealDer.style.display = "inline";
      equiBarcaDer.style.display = "none";
    } else {
      equiBarcaDer.style.display = "inline";
      equiRealDer.style.display = "none";
    }
  }
  validarCampos();
});

window.onload = function() {
  sessionStorage.removeItem("Nombre Local");
  sessionStorage.removeItem("Nombre Visit");
  sessionStorage.removeItem("Equipo Local");
  sessionStorage.removeItem("Equipo Visit");
  sessionStorage.removeItem("Goles Izq");
  sessionStorage.removeItem("Nro Tiro");
  sessionStorage.removeItem("Goles Der");
  nombreIzq.value = ''
  nombreDer.value = ''
  equipoIzq.value = ''
  equipoDer.value = ''
}

function redireccionar() {
  window.location.href = "./play/index.html";
}
