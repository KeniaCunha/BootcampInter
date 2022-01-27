var jogador1 = 1;
var jogador2 = 0;
var placar;

/*
//ninho de if 
if(jogador1 != -1){
    //estruturas condicionais
    if (jogador1 > 0){
        console.log (" O jogador 1 marcou ponto!" );
    } else if (jogador2 > 0){
        console.log (" O jogador 2 marcou ponto!" );
    } else {
        console.log("Nenhum jogador marcou ponto");
    }
}*/


//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos"):console.log("Jogadores inválidos");
    //usando if
if (jogador1 > 0 && jogador2 ==0){
    console.log (" O jogador 1 marcou ponto!" );
    placar=jogador1 > jogador2;

//usando else if
} else if (jogador2 > 0 && jogador1 ==0){
    console.log (" O jogador 2 marcou ponto!" );
    placar=jogador2 > jogador1;

//usando else 
} else {
    console.log("Nenhum jogador marcou ponto");
}
switch (placar){
    case placar = jogador1 > jogador2:
        console.log ("Jogador 1 ganhou! ");
        break;
        case placar = jogador2 > jogador1:
            console.log ("Jogador 2 ganhou! ");
            brake;
            default:
            console.log("Ninguem ganhou! ")
}  


    