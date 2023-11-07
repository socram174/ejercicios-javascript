document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro");
  
    formulario.addEventListener("submit", function (event) {
      if (!validarFormulario()) {
        event.preventDefault();
      }
    });
  
    function validarFormulario() {
      const nombre = document.getElementById("registro_nombre").value;
      const apellido = document.getElementById("registro_apellido").value;
      const email = document.getElementById("registro_email").value;
      const password = document.getElementById("registro_password").value;
      const comentarios = document.getElementById("registro_comentarios").value;
      const condiciones = document.getElementById("registro_condiciones").checked;
  
      if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        comentarios.trim() === ""
      ) {
        alert("Todos los campos son obligatorios.");
        return false;
      }
  
      if (!validarEmail(email)) {
        alert("Email no válido.");
        return false;
      }
  
      if (comentarios.length > 50) {
        alert("Los comentarios no deben exceder los 50 caracteres.");
        return false;
      }
  
      if (!validarPassword(password)) {
        alert(
          "La contraseña debe tener al menos 6 caracteres, una minúscula, una mayúscula y un dígito."
        );
        return false;
      }
  
      if (!condiciones) {
        alert("Debes aceptar las condiciones del servicio.");
        return false;
      }
  
      return true;
    }
  
    function validarEmail(email) {
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return regex.test(email);
    }
  
    function validarPassword(password) {
      // Mínimo 6 caracteres, una minúscula, una mayúscula y un dígito
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return regex.test(password);
    }
  });
  