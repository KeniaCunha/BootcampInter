//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set (array);

    // argumento Rest, use o operador de propagação para transformar um Set em um Array. Irá mostrar-lhe exatamente o mesmo Array como meuArray
    return [...mySet];
}

console.log(valoresUnicos(meuArray));

