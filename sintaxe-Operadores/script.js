//Crie uma função que recebe dois números como parâmetros.
//Confira se os números são iguais.
//Confira se a soma dos números é maior que 10 ou menor que 20.
//Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

function comparaNumeros (num1, num2){
    const frase1 = criaPrimeiraFrase(num1, num2);
    const frase2 = criaSegundaFrase(num1, num2);

    return `${frase1} ${frase2}`;

}

function criaPrimeiraFrase(num1, num2){
    let iguais = "não"; 

    if (num1===num2){
        iguais = " ";
    }
    
    return `Os numeros ${num1} e ${num2} ${iguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    let soma = num1 + num2;
    let comparaDez = "menor";
    let comparaVinte = "menor";

    if ((num1+num2) > 10){
        comparaDez = "maior";
    }

    if ((num1+num2) > 20){
        comparaVinte = "maior ";
    }else if((num2+num1)==20){
        comparaVinte = "igual"
    }
    
    return `Sua soma é ${soma}. Que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;

}

console.log(comparaNumeros(10,12));


