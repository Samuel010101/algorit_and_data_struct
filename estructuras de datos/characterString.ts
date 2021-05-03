// Cadenas de caracteres
// var prueba = 'Samuel Martinez'
// console.log(prueba.length);

// Comprobar si una frase es simetrica --> que se le igual si comenzamos a leer de ambos lados
// este algoritmo debe ir comparando de afuera a dentro cada index del array de ambos lados cada uno
// con su letra paralela al otro extremo

// var simetria = 'allivessevilla';

// const checkPal = () => {
//     var pal = true;
//     for (var i=0; i < simetria.length / 2 && pal; i++) {
//         // esta linea de codigo nos permite recorrer el array desde ambos extremos a dentro
//         if(simetria[i] != simetria[(simetria.length) - i - 1])
//             pal = false;
//     }
//     if(pal){
//         console.log(simetria + ' is pal')
//     }else {
//         console.log(simetria + ' is not pal')
//     }
// }   
// checkPal()


// Debes recorrer un array con números decimales y al finalizar mostrar por pantalla 
// los siguientes datos

// - El número mayor encontrado en el array
// - El número menor encontrado en el array
// - El valor promedio de entre los números de todo el array

var mi = 0;
var ma = 0;
var totalSum = 0;
var totalNum = 0;
var average = 0;
var arr = [];
const findMinMax = (arr) => {
    var arrLength = arr.length
    var sorted = arr.sort();
    console.log(sorted)
    if(mi = arr[0]){
        console.log(mi +' This is min number')
   }
    
   for (var i=0; i <= arrLength; i++){
        ma = arr[i]

        if((i + 1) == (arrLength)){
            console.log(ma +' This is max number')
    }
   }
    
    for (var ar in arr) {
        totalSum += arr[ar]   
   } 

   totalNum = arr.length
   
   average = totalSum / totalNum
   console.log(average + ' This the average')
}
findMinMax([4.3, 5.5, 7.1, 7.3, 1.5, 2.1, 2.7, 3.1, 3.3, 3.7])

