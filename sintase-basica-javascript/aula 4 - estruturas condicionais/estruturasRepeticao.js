let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

/*
//for executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}*/

/*
// for/in executa repetição a partir de uma propriedade, neste caso ele imprime os indices
// com array
for (let i in array){
    console.log(i);
}

//com object
for(i in object){
    console.log(i);
}*/

/*
//for/of executa a retição a partir de um valor, neste caso ele imprime os valores de cada indice
for( i of array){
    console.log(i);
}
// o for/of não dá para ser utilizado em objetos
for( i of object.propriedade1){
    console.log(i)
}*/

// while executa a instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução  
var a = 0;
/*
while(a < 10){
    a++;
    console.log (a);
}*/

// do while executa a instrução "até que" determinada condição for falsa, a verificação é feita depois da execução

do{
    a++;
    console.log(a);
}while (a < 10);