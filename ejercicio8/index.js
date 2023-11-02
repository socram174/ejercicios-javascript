const parOimpar = (numero) => {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }

console.log(parOimpar(2));
console.log(parOimpar(7));
console.log(parOimpar(11));
console.log(parOimpar(1));