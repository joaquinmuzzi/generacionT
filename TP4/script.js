function verificarJubilacion() {
  const edad = parseInt(document.getElementById("edad").value);
  const genero = document.getElementById("genero").value;
  const resultado = document.getElementById("resultado");

  // Validación de entrada
  if (isNaN(edad) || !genero) {
    resultado.textContent = "⚠️ Por favor, completá todos los campos.";
    resultado.style.color = "orange";
    return;
  }

  // Lógica de jubilación según género
  if (genero === "mujer" && edad >= 60) {
    resultado.textContent = "🎉 ¡Podés jubilarte! (Mujer, 60 años o más)";
    resultado.style.color = "green";
  } else if (genero === "hombre" && edad >= 65) {
    resultado.textContent = "🎉 ¡Podés jubilarte! (Hombre, 65 años o más)";
    resultado.style.color = "green";
  } else {
    const edadFaltante = genero === "mujer" ? 60 - edad : 65 - edad;
    resultado.textContent = `⏳ Aún no podés jubilarte. Te faltan ${edadFaltante} años.`;
    resultado.style.color = "red";
  }
}
