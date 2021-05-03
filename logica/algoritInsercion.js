// Algoritmo de inserción
var vector = [3, 2, 1, 6, 7, 5, 10, 8, 9, 4];
var arrLength = vector.length;
var aux;
var j;
var insercion = function () {
    for (var i = 1; i < arrLength; i++) {
        aux = vector[i];
        for (j = i - 1; j >= 0; j--) {
            vector[j + 1] = vector[i];
            vector[j + 1] = aux;
        }
    }
};
insercion();
