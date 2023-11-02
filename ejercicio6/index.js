var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = 19741569;
var letra = "W";


if(dni < 0 || dni > 99999999){

    console.log("El número proporcionado no es válido, debe ser un valor igual o mayor a 0, y menor o igual a 99999999");

}else{
    
        var resto = dni % 23;
    
        if(letra != letras[resto]){
    
            console.log("La letra indicada no es correcta");
    
        }else{
    
            console.log("El número de DNI y su letra son correctos");
    
        }
    
    
}