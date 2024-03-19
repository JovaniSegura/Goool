let nombreIzq = document.getElementById("nombreIzq");
let nombreDer = document.getElementById("nombreDer");
let equipoIzq = document.getElementById("equipoIzq");
let equipoDer = document.getElementById("equipoDer");
let boton = document.querySelector(".boton");
let infoRegNombre = document.querySelectorAll(".infoRegNombre");

function validarCampos() {
  if (
    nombreIzq.value !== "" &&
    nombreDer.value !== "" &&
    equipoIzq.value !== "" &&
    equipoDer.value !== ""
  ) {
    boton.style.display = "inline";
  } else {
    boton.style.display = "none";
  }
}

nombreIzq.addEventListener("input", () => {
  if (nombreIzq.value.match(/[a-zA-ZñÑ]/)) {
    if (nombreIzq.value.toLowerCase() === nombreDer.value.toLowerCase()) {
      infoRegNombre[0].textContent = "Por favor escoge un nombre diferente";
      infoRegNombre[0].style.color = 'red'
      nombreIzq.value = "";
    } else {
      infoRegNombre[0].textContent = "Nombre OK";
      infoRegNombre[0].style.color = 'green'
    }
  } else {
    infoRegNombre[0].textContent = "Nombre Incorrecto";
    infoRegNombre[0].style.color = 'red'
  }
  validarCampos();
});

nombreDer.addEventListener("input", () => {
  if (nombreDer.value.match(/[a-zA-ZñÑ]/)) {
    if (nombreDer.value.toLowerCase() === nombreIzq.value.toLowerCase()) {
      infoRegNombre[1].textContent = "Por favor escoge un nombre diferente";
      infoRegNombre[1].style.color = 'red'
      nombreDer.value = "";
    } else {
      infoRegNombre[1].textContent = "Nombre OK";
      infoRegNombre[1].style.color = 'green'
    }
  } else {
    infoRegNombre[1].textContent = "Nombre Incorrecto";
    infoRegNombre[1].style.color = 'red'
  }
  validarCampos();
});


equipoIzq.addEventListener("change", () => {
  if (equipoIzq.value === equipoDer.value) {
    console.log("Los equipos no pueden ser los mismos");
    equipoIzq.value = "";
  } else {
    console.log("El equipo escogido por el Jugador Local es: " + equipoIzq.value);
  }
  validarCampos();
});

equipoDer.addEventListener("change", () => {
  if (equipoDer.value === equipoIzq.value) {
    console.log("Los equipos no pueden ser los mismos");
    equipoDer.value = "";
  } else {
    console.log("El equipo escogido por el Jugador Visitante es: " + equipoDer.value);
  }
  validarCampos();
});
