// Calcular el tiempo de duracion de los algoritmos y la diferencia entre ellos

// Algoritmo de inserción
var vector = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4];
var arrLength = vector.length
var aux;
var result;

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

