// Algoritmo de inserción
// el primer bucle for incia recorriendo el array en sentido comun a partir del indice 1
// luego el segundo bucle for comienza a hacer una comparacion entre el indece actual del primer for
// con el indece anterior que a su vez es el indece actual de este segundo bucle 
// el primer bucle va almacenando el valor actual en una variable auxiliar mientras el segundo bucle
// va comparando y sustituyendo segun su orden

var vector = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4];
var arrLength = vector.length
var aux;
// var result;

const insercion = () => {

    for (var i = 1; i < arrLength; i++){
        aux = vector[i];
        var j;
        for (j = i - 1; j >= 0 && vector[j] > aux; j--)
            vector[j + 1] = vector[j];
            
       vector[j + 1] = aux
          
    }
    
    for (var n = 0; n < arrLength; n++){ 
        console.log(vector[n]) 
    }
    
}
insercion();