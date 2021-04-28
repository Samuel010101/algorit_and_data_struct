// Diseña un algoritmo y escribe el código que diga si un número es guay o no. 
// Un número es guay cuando es el resultado de la suma de números consecutivos desde el 1
var guayNum = function (num) {
    for (var i = 1; i <= num / 2; i++) {
        if (num += i) {
            console.log(num + 'Is guay');
        }
    }
};
guayNum(10);
