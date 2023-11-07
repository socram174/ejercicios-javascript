// Obtener el número de enlaces de la página
var numeroDeEnlaces = document.links.length;
console.log("Número de enlaces de la página: " + numeroDeEnlaces);

// Obtener la dirección a la que enlaza el penúltimo enlace
if (numeroDeEnlaces >= 2) {
  var penultimoEnlace = document.links[numeroDeEnlaces - 1].href;
  console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace);
} else {
  console.log("No hay suficientes enlaces para encontrar el penúltimo.");
}

// Contar el número de enlaces que enlazan a "http://prueba"
var enlacesAHttpPrueba = document.querySelectorAll('a[href="http://prueba"]').length;
console.log("Número de enlaces que enlazan a http://prueba: " + enlacesAHttpPrueba);

// Obtener el número de enlaces del tercer párrafo
var tercerParrafo = document.getElementsByTagName("p")[2];
if (tercerParrafo) {
  var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName("a").length;
  console.log("Número de enlaces del tercer párrafo: " + enlacesEnTercerParrafo);
} else {
  console.log("No se encontró un tercer párrafo en la página.");
}
