// Diseña un algoritmo y escribe el código que diga si un número es guay o no. 
// Un número es guay cuando es el resultado de la suma de números consecutivos desde el 1

var i = 1
var sum = 0;

const guayNum = (num) => {
    while (sum < num){
        sum += i
        i++
    }
    if (sum == num){
        console.log(num + ' Is guay')
    }else {
        console.log(num + ' Is not guay')
    }
    
}
guayNum(25)

