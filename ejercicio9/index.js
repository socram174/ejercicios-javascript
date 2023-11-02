function analizarCadena(cadena) {
    // Verificacion solo mayusculas
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas.");
    }
    // Verificacion solo minusculas
    else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas.");
    }
    // Verificacion contiene ambas
    else {
      console.log("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
  }
  
analizarCadena("GODZILLA");
analizarCadena("lunes");
analizarCadena("OceAnO") ;
  