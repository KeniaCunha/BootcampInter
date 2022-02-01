
/*Atividade 1 Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

//Solução1


function verificaPalindromo(String){
    if (!String) return "string inexistente";

    //o split separa os caracteres da palavra informada, que faz o seu reverse colocando ao contrario a palavra, o join junta novamente os caracteres e faz a comaração com a string passada 

    return String.split("").reverse().join("") === String;
}

console.log(verificaPalindromo("feliz"));

//Solução2

function verificaPalindromo2(String){
    if(!String) return "string inexistente";

    for (let i = 0; i < String.length; i++){
        if(String[i] !== String[String.length -1 - i]) {
            return false;
        }
        
    }
    return true;
}
console.log(verificaPalindromo2("amor"));


