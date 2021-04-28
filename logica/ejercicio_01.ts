// Restar dos numeros sin usar la operacion de resta
// 5 - 1 = 4  
// 7 - 3 = 4 --> Tambien aplica  
// 5 - 2 = 3 --> Tambien aplica

// 1 = 5^2 + 4^2 / la suma total(10) = 4
// a = 5^2
// b = 4^2
// st = 10

var a = 5 * 5
var b = 4 * 4
var st = 10

const Operation = () => {
    var o1 = a + b 
    var result = o1 / st
    // console.log(result)
    // result = 4.1 = 4
}

Operation()

// Multiplicar dos numeros sin usar el operador de multiplicación
// 4 * 2 = 8 --> 
// a --
// b = 0 = b + 4

var a = 2
var b = 0 + 4
var val = 0

const multi = () => {
    while (a) {
        a--;
        val += b
    }
    // console.log(val)
}
multi()


// Obtener el resultado de la division de dos numeros sin usar el operador de division 
// 7 / 2 = 3.5

var a = 7;
var b = 2; 
var v = 0;

const division = () => {
    while (a >= b) {
        v++
        a -= 2
    }
    // console.log(v)
}
division()


// Potenciacion de un numero sin usar su operador 
// 2 ^ 3 = 8

var a = 2;
var b = 3;
var val = 1;

const potencia = () => {
    while (b) {
        val = val * a 
        b--   
    }
    // console.log(val)
}
potencia()



// Buscar el factoria de un numero sin usar su operador 
// 5 = 1 * 2 * 3 * 4 * 5

var a = 5
var val = 1

const fact = () => {
    for (let i = 1; i <= a; i++ ) {
        val = val * i
    }   
    // console.log(val)
}
fact()