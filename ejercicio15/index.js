function muestra() {
    var elementoAdicional = document.querySelector('.adicional');
    var enlace = document.querySelector('.enlace');
  
    elementoAdicional.classList.remove('oculto');
    elementoAdicional.classList.add('visible');
  
    enlace.style.display = 'none';
  }
  
  // Asigna el evento "click" al enlace para llamar a la función muestra()
  document.querySelector('.enlace').addEventListener('click', muestra);
  