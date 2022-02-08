//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//exemplo map com THIS
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map (function(item) {
        return item * this.value;
    }, thisArg);
}

const num = [1,2];

console.log("this -> maçã", mapComThis(num,maca));

console.log("this -> laranja", mapComThis(num,laranja));

console.log(num);

//exemplo map sem THIS

function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}

const num2 = [2,4,6,8,10];

console.log(mapSemThis(num2));

console.log(num2);