// Comprendiendo la recursividad
var recursion = function (data) {
    console.log(data);
    if (data > 0) {
        recursion(data - 1);
    }
    else {
        console.log('Paaaaaaaaaaa!');
    }
};
recursion(5);
