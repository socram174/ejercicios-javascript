// Definición del prototipo Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  // Método para obtener detalles de Persona
  Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Genero: " + this.genero);
  }
  
  // Definición del prototipo Estudiante que hereda de Persona
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  // Establecer la herencia de Estudiante desde Persona
  Estudiante.prototype = Object.create(Persona.prototype);
  
  // Método para registrar a un Estudiante
  Estudiante.prototype.registrar = function() {
    console.log(this.nombre + " ha sido registrado en el curso " + this.curso + " del grupo " + this.grupo);
  }
  
  // Definición del prototipo Profesor que hereda de Persona
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  // Establecer la herencia de Profesor desde Persona
  Profesor.prototype = Object.create(Persona.prototype);
  
  // Método para asignar una asignatura a un Profesor
  Profesor.prototype.asignar = function() {
    console.log(this.nombre + " está asignado para enseñar " + this.asignatura + " en el nivel " + this.nivel);
  }
  
  // Casos de prueba
  var estudiante1 = new Estudiante("Estudiante1", 20, "Masculino", "Informática", "Grupo A");
  estudiante1.obtDetalles();
  estudiante1.registrar();
  
console.log("---------------------------------------------------");

  var profesor1 = new Profesor("Profesor1", 35, "Femenino", "Matemáticas", "Secundaria");
  profesor1.obtDetalles();
  profesor1.asignar();
  