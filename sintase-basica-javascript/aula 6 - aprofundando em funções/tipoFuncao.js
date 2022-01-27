//tipos de funções

//declarativas a funcao requer um nome
function funcaoDeclarativa() {
    console.log("Sou uma mensagem de uma função declarativa");
    
}
funcaoDeclarativa();

//expressões de funções 
// com nomeação
var funcaoExpressao = function funcaoExpressao() {
    console.log("Sou uma mensagem de uma função de expressão com nomeação");
    
}
funcaoExpressao();

// sem nomeação entende-se que o nome da variavel se torna o nome da função
var funcaoExpressao = function () {
    console.log("Sou uma mensagem de uma função de expressão sem nomeação");
    
}
funcaoExpressao();

//arrow function
var arrowFuncao = () =>{
    console.log("Sou uma arrow function")
}
arrowFuncao();