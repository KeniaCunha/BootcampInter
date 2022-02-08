/* Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original*/

function mudarModo(){
    mudarClasses();
    mudarTexto();
}

function mudarClasses(){
    botao.classList.toggle(modoEscuroClasse);
    h1.classList.toggle(modoEscuroClasse);
    corpo.classList.toggle(modoEscuroClasse);
    rodape.classList.toggle(modoEscuroClasse);
}

function mudarTexto(){
    const modoClaro= "Light Mode";
    const modoEscuro= "Dark Mode";

    //contains será verificado se dentro da classe informada existe alguma coisa
    if(corpo.classList.contains(modoEscuroClasse)){
       botao.innerHTML = modoClaro;
       h1.innerHTML = modoEscuro + " ON";
       return;

    }
    botao.innerHTML = modoEscuro;
    h1.innerHTML = modoClaro + " ON";

}

const modoEscuroClasse = "dark-mode";
const botao = document.getElementById("seletor-modo");
const h1 = document.getElementById("titulo-pagina");
const corpo = document.getElementsByTagName("body")[0];
const rodape = document.getElementsByTagName("footer")[0];


botao.addEventListener("click",mudarModo);
