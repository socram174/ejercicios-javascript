var enlacesOcultar = document.querySelectorAll('a[href="#"]');


enlacesOcultar.forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var parrafo = enlace.previousElementSibling; // Obtener el párrafo anterior al enlace
    console.log(parrafo.style.display)
    if (parrafo.style.display === 'none' || parrafo.style.display === '') {
      parrafo.style.display = 'block'; // Mostrar el párrafo
      enlace.textContent = 'Ocultar contenidos'; // Cambiar el texto del enlace
    } else {
      parrafo.style.display = 'none'; // Ocultar el párrafo
      enlace.textContent = 'Mostrar contenidos'; // Cambiar el texto del enlace
    }
  });
});
