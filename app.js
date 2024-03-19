let nombreIzq = document.getElementById("nombreIzq");
let nombreDer = document.getElementById("nombreDer");
let equipoIzq = document.getElementById("equipoIzq");
let equipoDer = document.getElementById("equipoDer");
let boton = document.querySelector(".boton");

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
  if (nombreIzq.value === nombreDer.value) {
    console.log("Por favor escoge un nombre diferente");
    nombreIzq.value = "";
  } else {
    console.log("El nombre del 1er Jugador es: " + nombreIzq.value);
  }
  validarCampos();
});

nombreDer.addEventListener("input", () => {
  if (nombreDer.value === nombreIzq.value) {
    console.log("Por favor escoge un nombre diferente");
    nombreDer.value = "";
  } else {
    console.log("El nombre del 2do Jugador es: " + nombreDer.value);
  }
  validarCampos();
});

equipoIzq.addEventListener("change", () => {
  if (equipoIzq.value === equipoDer.value) {
    console.log("Los equipos no pueden ser los mismos");
    equipoIzq.value = "";
  } else {
    console.log("El equipo escogido por el 1er jugador es: " + equipoIzq.value);
  }
  validarCampos();
});

equipoDer.addEventListener("change", () => {
  if (equipoDer.value === equipoIzq.value) {
    console.log("Los equipos no pueden ser los mismos");
    equipoDer.value = "";
  } else {
    console.log("El equipo escogido por el 2do jugador es: " + equipoDer.value);
  }
  validarCampos();
});
