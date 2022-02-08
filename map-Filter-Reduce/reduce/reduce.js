//Some todos os números de um array

function somaNumeros(array){
    return array.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const array = [1,2];

console.log(somaNumeros(array));

//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista= [
{
    nome: " sabao em pó",
    preco: 20
    
},
{   
    nome: "cereal",
    preco: 15
},
{
    nome: "toalha",
    preco: 30,
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada", index+1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);

}

console.log(calculaSaldo(saldoDisponivel,lista));

let array = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);