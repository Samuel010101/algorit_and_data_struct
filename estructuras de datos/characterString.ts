// Cadenas de caracteres
var prueba = 'Samuel Martinez'
// console.log(prueba.length);

// Comprobar si una frase es simetrica --> que se le igual si comenzamos a leer de ambos lados
// este algoritmo debe ir comparando de afuera a dentro cada index del array de ambos lados cada uno
// con su letra paralela al otro extremo

var simetria = 'allivessevilla';

const checkPal = () => {
    var pal = true;
    for (var i=0; i < simetria.length / 2 && pal; i++) {
        if(simetria[i] != simetria[(simetria.length) - i - 1])
            pal = false;
    }
    if(pal){
        console.log(simetria + ' is pal')
    }else {
        console.log(simetria + ' is not pal')
    }
}   
checkPal()