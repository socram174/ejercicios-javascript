var resultado;

// Fecha
var fechaRegex = /\d{2}\/\d{2}\/\d{4}/;
var texto = "Nací el 05/04/1982 en Donostia.";
resultado = texto.match(fechaRegex);

if (resultado !== null) {
  console.log("La fecha es válida: " + resultado[0]);
} else {
  console.log("No se encontró una fecha válida en el texto.");
}

// Email
var emailRegex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,3}$/;
var correo = "marcos.silva-14@gmail.com";
resultado = correo.match(emailRegex);

if (resultado !== null) {
  console.log("El email es valido: " + resultado[0]);
} else {
  console.log("No se encontró un email válido en el texto.");
}

// Reemplazo de caracteres
function escapeHTML(text) {
  var replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];

  replacements.forEach(function (replace) {
    var regex = new RegExp(replace[0], "g");
    text = text.replace(regex, replace[1]);
  });

  return text;
}

var textoHTML = "<p>Este es un <script>alert('Ataque XSS');</script> ejemplo.</p>";
var textoLimpio = escapeHTML(textoHTML);
console.log(textoLimpio); 

// Invertir nombres
var nombreCompleto = "Marcos Silva";
var regexNombreApellido = /(.*)\s(.*)/;
var nombreInvertido = nombreCompleto.replace(regexNombreApellido, "$2, $1");
console.log(nombreInvertido); 


// Eliminar etiquetas peligrosas
var textoHTML =
  "<p>Este es un <script>alert('Ataque XSS');</script> ejemplo.</p>";
var regexEliminarEtiquetasPeligrosas = /<script[\s\S]*?<\/script>/gi;
var textoLimpio = textoHTML.replace(regexEliminarEtiquetasPeligrosas, "");
console.log(textoLimpio); 
