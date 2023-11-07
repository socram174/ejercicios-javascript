// Obtén los elementos donde mostrar la posición
var posicionNavegador = document.querySelector("#raton > div");
var posicionPagina = document.querySelector("#teclado > div");

// Agregar un controlador de eventos para el evento "mousemove"
document.addEventListener("mousemove", function (event) {
  // Obtener las coordenadas X e Y del puntero del ratón en relación con el navegador
  var xNavegador = event.clientX;
  var yNavegador = event.clientY;

  // Obtener las coordenadas X e Y del puntero del ratón en relación con la página
  var xPagina = event.pageX;
  var yPagina = event.pageY;

  // Mostrar las coordenadas en los elementos correspondientes
  posicionNavegador.textContent =
    "Navegador[" + xNavegador + ", " + yNavegador +"] \nPágina[" + xPagina + ", " + yPagina+"]";
});


// Obtén el elemento donde mostrar la información
var tecladoDiv = document.querySelector("#teclado > div");
var teclado = document.querySelector("#teclado");
var ratonDiv= document.querySelector("#raton > div");
var raton= document.querySelector("#raton");


        // Agregar un controlador de eventos para el evento "keydown" (tecla presionada)
        document.addEventListener("keydown", function (event) {
            // Obtener la tecla presionada y su código
            var tecla = event.key;
            var codigo = event.keyCode;

            // Cambiar el color de fondo a azul (#CCE6FF)
            teclado.style.backgroundColor = "#CCE6FF";

            // Crear un mensaje con la información de la tecla presionada
            var mensaje = "Tecla presionada: " + tecla + " (Código: " + codigo + ")";

            // Mostrar el mensaje en el elemento correspondiente
            tecladoDiv.textContent = mensaje;

        });

        // Agregar un controlador de eventos para el evento "mousedown" (ratón presionado)
        document.addEventListener("mousedown", function (event) {
            // Cambiar el color de fondo a amarillo (#FFFFCC)
            raton.style.backgroundColor = "#FFFFCC";
        });

        // Agregar un controlador de eventos para el evento "mousemove" (mover el ratón)
        document.addEventListener("mousemove", function (event) {
            // Restaurar el color de fondo a blanco
            teclado.style.backgroundColor = "white";
            raton.style.backgroundColor = "white";

            // Borrar el mensaje al mover el ratón
            tecladoDiv.textContent = "";
        });