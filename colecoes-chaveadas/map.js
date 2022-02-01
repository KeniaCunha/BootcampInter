/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são administradores.*/

function getAdmins(map){

    let admins = [];
    //iterar e pegar o valor e chave junto no map
    for([key, value] of map){
        if (value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}
//criando map

const usuarios = new Map();

usuarios.set("Kenia","Admin");
usuarios.set("Maria","User");
usuarios.set("Jonathan","Admin");
usuarios.set("Keli","User");
usuarios.set("Karina","Admin");
usuarios.set("Cleide","User");


console.log(getAdmins(usuarios));