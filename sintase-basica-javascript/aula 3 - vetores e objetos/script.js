// o que são vetores ou arrays

// como declarar um array

let array = ["string",1, true];
console.log(array);

//pode guardar varios tipos de dados
let array1 = ["string", 1, true, ["array1"], ["array2"],["array3"], ["array4"], ["array5"]];
console.log(array1);

//manipulando arrays
//forEach
array1.forEach(function(item,indice){console.log(item,indice)});

//push
array1.push("novo item");
console.log(array1);

//pop
array1.pop();
console.log(array1);

//shift
array1.shift();
console.log(array1);

//unshift
array1.unshift("novo item incio");
console.log(array1);

//indexof
console.log(array.indexOf(true));

//splice
array1.splice(0,3);
console.log(array1);

//slice
let novoArray= array1.slice(0,3);
console.log(novoArray);

// object
let object={string: "kenia", number: 1, boolean: true, array: ["array4"], objectInterno: {objectInterno:"objeto Interno"}};
//acessandosó um propriedade do objeto
console.log(object.objectInterno);

//desestruturação do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);



