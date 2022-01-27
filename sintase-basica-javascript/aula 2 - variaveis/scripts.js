//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "Kenia"
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

// como declarar;

var variavel = "Kenia"
variavel = "Cunha";
console.log((variavel));

let variavel2 = "Diana";
variavel2 = "Martine";
console.log(variavel2);

const variavel3 = "pi";
console.log(variavel3);

//variavel let somente escopo local
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

//OPERADORES
//atribuição

var atribuicao = 'Kenia';
console.log(atribuicao);

//comparação
var comparacao = "0" == 0;
console.log(comparacao);

//comparação identica tem que ser igual no valor e no tipo
var comparacao_identica = "0" === 0;
console.log(comparacao_identica);

//operadores lógicos && "e" considera qe todos os valores sejam true;

var e = true && false;
console.log(e);

// || 'ou' considera que qlq valor sejam true;
var ou = true || false;
console.log(ou);

//! "não" considera o valor de true para false ou vice-versa;
var nao = !true;
console.log(nao);


