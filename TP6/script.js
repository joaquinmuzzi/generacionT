// Ejercicio 1 – Evaluar Rendimiento
function evaluarRendimiento() {
  const nota = parseFloat(document.getElementById("nota").value);
  let resultado;

  if (nota < 2) resultado = "Muy mal";
  else if (nota < 5) resultado = "Mal";
  else if (nota < 6) resultado = "Tan cerca pero tan lejos";
  else if (nota < 8) resultado = "Bien!";
  else if (nota <= 10) resultado = "Muy bien!!";
  else resultado = "Nota fuera de rango";

  document.getElementById("resultado1").textContent = resultado;
}

// Ejercicio 2 – The Biggest One
function biggestOne(a, b, palabra) {
  if (a > b) return a;
  if (b > a) return b;
  return palabra[0] + palabra[palabra.length - 1];
}

function biggestOneHandler() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const palabra = document.getElementById("palabra").value.trim();
  const resultado = biggestOne(a, b, palabra);
  document.getElementById("resultado2").textContent = resultado;
}

// Ejercicio 3 – Frootloop
const frutasYVerduras = [
  { fruta: "banana" }, { verdura: "apio" }, { fruta: "manzana" },
  { fruta: "frutilla" }, { verdura: "zanahoria" }, { fruta: "kiwi" },
  { fruta: "sandia" }, { fruta: "melon" }, { verdura: "repollo" }, { fruta: "mango" }
];

function frootloop() {
  const frutas = frutasYVerduras
    .filter(item => item.fruta)
    .map(item => item.fruta);
  return { frutas };
}

function frootloopHandler() {
  const resultado = frootloop();
  document.getElementById("resultado3").textContent = JSON.stringify(resultado, null, 2);
}

// Ejercicio 4 – Soda Dispenser
const unidades = [1, 2, 3, 4];
const gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function dispenserGaseosas(unidades, gaseosas) {
  const gaseosasEnStock = {};
  gaseosas.forEach((nombre, i) => {
    gaseosasEnStock[nombre] = unidades[i];
  });
  return gaseosasEnStock;
}

function dispenserHandler() {
  const pedido = document.getElementById("pedido").value.trim().toLowerCase();
  const stock = dispenserGaseosas(unidades, gaseosas);
  const mensaje = stock[pedido]
    ? `Sí, tenemos ${stock[pedido]} unidades de ${pedido}.`
    : "No tenemos esa gaseosa en stock.";
  document.getElementById("resultado4").textContent = mensaje;
}

// Ejercicio 5 – Año de Nacimiento
function calcularAnioNacimiento(personas) {
  const anioActual = new Date().getFullYear();
  return personas.map(p => ({
    ...p,
    nacimiento: anioActual - p.edad
  }));
}

function anioNacimientoHandler() {
  const test = [
    { nombre: "Juan", edad: 19 },
    { nombre: "Mario", edad: 22 }
  ];
  const resultado = calcularAnioNacimiento(test);
  document.getElementById("resultado5").textContent = JSON.stringify(resultado, null, 2);
}
