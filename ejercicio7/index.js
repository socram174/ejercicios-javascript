let valor = 5;
let factorial = 1;

if(valor % 1 === 0 && valor > 0){
    for(let i = 1; i < valor; i++){

        factorial *= i+1;
    
    }
    console.log("Resultado factorial: "+factorial);
}else{
    console.log("El número no es entero o es menor que 0");
}



