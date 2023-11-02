let dado1
let dado2

let sumas = [];
let valores = [];
let indice


function lanzar(){
    
     dado1 = Math.floor(Math.random() * 6) + 1;
     dado2 = Math.floor(Math.random() * 6) + 1;

    //console.log(`Dado 1: ${dado1}`);
    //console.log(`Dado 2: ${dado2}`);

    let suma = dado1 + dado2;
    if(valores.includes(suma)){
        indice = valores.indexOf(suma);
        sumas[indice] += 1;
    }else {
        sumas.push(1);
        valores.push(suma);
    
    }

    //console.log(`La suma de los dados es: ${suma}`);
}

for(let i = 0; i < 36000; i++){
    lanzar();
}

console.log(sumas);
console.log(valores);