//Importa biblioteca "Prompt" (tipo Scanner em Java) para poder escrever os valores.
import prompt from 'prompt-sync';

//Função ler, onde permite o input no console.
const ler = prompt();

//Escreve as notas 
console.log('informe a primeira nota:');
let nota1 = Number (ler());

console.log('informe a segunda nota:');
let nota2 = Number (ler());

console.log('informe a terceira nota: ');
let nota3 = Number (ler());

//Calcula e imprime a média no console.
let media = (nota1 + nota2 + nota3) / 3;

console.log('A média é: ' +  media);