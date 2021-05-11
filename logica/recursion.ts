// Comprendiendo la recursividad

// Basic example
// const recursion = (data) => {
//     console.log(data)
//     if (data > 0) {
//         recursion(data - 1);
//     }else {
//         console.log('Paaaaaaaaaaa!');
//     }
// }
// recursion(5)


// Other
// const factorialRecursion = (num) => {
    
//     if (num > 1){
//         num = num * factorialRecursion(num -1)
//         console.log(num)
//     }
//     return num;
    
    
   
// }
// factorialRecursion(3)


// Hanoi exercise
var n;
var source;
var dest;
var aux;
const hanoi = (n, source, dest, aux) => {

    if(n > 0){
        hanoi(n-1, source, aux, dest);
        console.log(' Disk from position '+ source+ ' to '+ dest)
        hanoi(n-1, aux, dest, source)
    }
}
hanoi(3, 1, 3, 2)

// Desarrolla una función que de forma recursive calcule una multiplicación entre 2 números y retorne el resultado total
// ¿Qué lenguaje usaste y por qué?
// ¿Qué fallos tuviste que corregir?

// ¿Cuál es el código final que has desarrollado?

