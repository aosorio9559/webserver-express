const hbs = require("hbs");

/* Helpers */
hbs.registerHelper("getAnio", () => new Date().getFullYear());
hbs.registerHelper("capitalizar", (texto) => {
  const palabras = texto.split(" ");

  palabras.forEach((palabra, index) => {
    palabras[index] = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(" ");
});