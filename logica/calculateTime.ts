// Calcular el tiempo de duracion de los algoritmos y la diferencia entre ellos



// Algoritmo de intercambio
    // var arr = [];
    
    // const exchange = (arr) => {
    //     var arrLength = arr.length
    //     var sorted = arr.sort();
    //     console.log(sorted)
    // }
    // exchange([7, 3, 1, 4, 5, 9, 10, 15, 2, 19, 20, 8, 18, 17, 16, 12, 11, 13, 6, 14])
   

 


// Algoritmo de intercambio
var v = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4, 12, 11, 20, 19, 13, 14, 19, 17, 15, 18, 16];

var arrLength = v.length
var aux;
var posMin; 
// posMin quiere decir posición minima

const select = () => {
    
    for (var i=0; i < arrLength; i++) {
        posMin = i;
        for (var j = i + 1; j < arrLength; j++) {
            if (v[posMin] > v[j] ) posMin = j
        }
        aux = v[i];
        v[i] = v[posMin]
        v[posMin] = aux
    }
    for (var n = 0; n < arrLength; n++){
        console.log(v[n]);
    }

    // Este bloque de codigo nos permite calcular el tiempo de ejecución de este algoritmo
    var end, start;

    start = new Date();
    for (var i = 0; i < 1000; i++) {
        Math.sqrt(i);
    }
    end = new Date();

    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

}
select();






// Algoritmo de inserción
var vector = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4, 12, 11, 20, 19, 13, 14, 19, 17, 15, 18, 16];
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
        console.log(vector[n]); 
    }

    var end, start;

    start = new Date();
    for (var i = 0; i < 1000; i++) {
        Math.sqrt(i);
    }
    end = new Date();

    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

    
}
insercion();

