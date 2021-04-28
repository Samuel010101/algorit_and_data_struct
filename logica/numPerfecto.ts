// Encontrar los numeros perfectos 
// Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios positivos. Dicho de otra forma, un número perfecto es aquel que es amigo de sí mismo.
// Así, 6 es un número perfecto porque sus divisores propios son 1, 2 y 3; y 6 = 1 + 2 + 3. Los siguientes números perfectos son 28, 496 y 8128.

// const perfectNum = (num) => {
//     // var value = 0;

//     // for (let i = 1; i <= num/2; i++) {
//     //     if(num % i == 0) value += i
//     // }
//     // if (value == num){
//     //     // console.log(value + ' Is a perfect number');
    
//     // }else{
//     //     // console.log(value + ' Is not a perfect number');
//     // }
// }
// perfectNum(496)

// Encontrar si dos numeros son amigos 
// Dos numeros son amigos cuando la suma de los divisores del otro es igual al numero en si

const verifyFriends = (a, b) => {
    var sumA = 0;

    for (let i = 1; i <= a/2; i++) {
        if(a % i == 0) sumA += i;
    }

    var sumB = 0;
    for (let i = 1; i <= b/2; i++) {
        if(b % i == 0) sumB += i
    }

    if ((a == sumB) && (b == sumA)) {
        console.log(a + ' and ' + b + ' are friends ' );
    }else {
        console.log(a + ' and ' + b + ' are not friends ');
    }
  
}
verifyFriends(10, 15);

