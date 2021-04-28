// Para practicar optimizar codigo vamos a usar el ejericio de calcular si un numero es primo o no

// Para optimizar el codigo de la solucion al caso de los numeros primos tenemos dos cosas que hacer
// primero saber que no es necesario que el programa recorra todos los valores hasta llegar al mismo
// numero que estamos calculando, ya que ningun numero puede ser primo calculandose asi mismo
// entre un numero de mayor valor a su mitad
// estas son las dos integraciones que optimizan el algoritmo /2 y prime

const verifyPrime = (num) => {
    var prime = true;

    for (let i = 2; i <= num/2 && prime; i++) {
        if(num % i == 0){
            prime = false
        }
        // console.log(prime)
    }
}
verifyPrime(90)


