function anade(){
    var lista = document.getElementById("lista");
    var nuevoElemento = document.createElement("li");
    var texto = document.createTextNode("Nuevo elemento");
    nuevoElemento.appendChild(texto);
    lista.appendChild(nuevoElemento);
}