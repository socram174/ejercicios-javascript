var valores = [true, 5, false, "hola", "adios", 2];

// Elemento de texto mayor (yo supongo que se refiere a la cantidad de caracteres)
if (valores[3].length > valores[4].length) {
    console.log(`El elemento '${valores[3]}'(${valores[3].length} caracteres) es mayor que '${valores[4]}'(${valores[4].length} caracteres)`);
  } else if (valores[3].length < valores[4].length) {
    console.log(`El elemento '${valores[4]}'(${valores[4].length} caracteres) es mayor que '${valores[3]}'(${valores[3].length} caracteres)`);
  } else {
    console.log("Ambos elementos de texto son iguales("+ valores[3].length+" caracteres).");
  }


  // Utilizando exclusivamente los dos valores booleanos del array...

let verdadero = valores[0] || valores[2];
let falso = valores[0] && valores[2];
console.log("Verdadero: "+verdadero);
console.log("Falso:" +falso);


// determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
let num1 = valores[1]; 
let num2 = valores[5]; 

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

console.log("Suma:", suma);             
console.log("Resta:", resta);          
console.log("Multiplicación:", multiplicacion); 
console.log("División:", division);     
console.log("Módulo:", modulo);    