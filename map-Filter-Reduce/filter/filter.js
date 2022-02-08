//Filtre e retorne todos os números pares de um array.

function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [10, 25, 36, 47, 58, 69];

console.log(filtraPares(meuArray));