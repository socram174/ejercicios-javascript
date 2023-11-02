let cadena = "oso";

function verificarPalindromo(cadena) {
    var cadenaInvertida = cadena.split('').reverse().join('');
    if (cadena == cadenaInvertida) {
        return true;
    }
    return false;

}

console.log(verificarPalindromo(cadena)); 