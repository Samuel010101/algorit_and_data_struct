// Calcular el tiempo de duracion de los algoritmos y la diferencia entre ellos
// Algoritmo de intercambio
var v = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4];
var arrLength = v.length;
var aux;
var posMin;
var select = function () {
    for (var i = 0; i < arrLength; i++) {
        posMin = i;
        for (var j = i + 1; j < arrLength; j++) {
            if (v[posMin] > v[j])
                posMin = j;
        }
        aux = v[i];
        v[i] = v[posMin];
        v[posMin] = aux;
    }
    for (var n = 0; n < arrLength; n++) {
        console.log(v[n]);
    }
};
select();
// Algoritmo de inserción
// var vector = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4];
// var arrLength = vector.length
// var aux;
// var result;
// const insercion = () => {
//     for (var i = 1; i < arrLength; i++){
//         aux = vector[i];
//         var j;
//         for (j = i - 1; j >= 0 && vector[j] > aux; j--)
//             vector[j + 1] = vector[j];
//        vector[j + 1] = aux
//     }
//     for (var n = 0; n < arrLength; n++){ 
//         console.log(vector[n]) 
//     }
// }
// insercion();
