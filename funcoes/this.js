/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: "Kenia",
	idade: 27
}

const pessoa2 = {
	nome: "Maria",
	idade: 50
}

const animal = {
	nome: "Popo",
	idade: 12,
	raça: "pinsher"
}

console.log(calculaIdade.call(pessoa1,30));
console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.call(animal,30));


// no apply passa os valores por meio de colchetes
console.log(calculaIdade.apply(pessoa2,[7]));
console.log(calculaIdade.apply(pessoa1,[7]));
console.log(calculaIdade.apply(animal,[7]));