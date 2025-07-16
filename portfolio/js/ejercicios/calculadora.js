
let pantalla = document.getElementById('pantalla');
let operacion = "";

function presionar(valor) {
  if (pantalla.innerText === "0" && valor !== ".") {
    pantalla.innerText = valor;
  } else {
    pantalla.innerText += valor;
  }
  operacion = pantalla.innerText;
}

function calcular() {
  try {
    pantalla.innerText = eval(operacion);
    operacion = pantalla.innerText;
  } catch {
    pantalla.innerText = "Error";
    operacion = "";
  }
}

function borrar() {
  pantalla.innerText = "0";
  operacion = "";
}

function raiz() {
  let resultado = Math.sqrt(parseFloat(pantalla.innerText));
  pantalla.innerText = resultado;
  operacion = resultado;
}

function porcentaje() {
  let resultado = parseFloat(pantalla.innerText) / 100;
  pantalla.innerText = resultado;
  operacion = resultado;
}

function retroceso() {
  pantalla.innerText = pantalla.innerText.slice(0, -1) || "0";
  operacion = pantalla.innerText;
}
