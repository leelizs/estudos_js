const prompt = require('prompt-sync')({ sigint: true });

let palavras = [
    "maçã",
    "banana",
    "pera",
    "abacaxi",
    "mamão",
    "abacate",
    "laranja",
    "batata",
    "mandioca",
    "tomate"
];

function embaralhar() {
    palavras.sort(() => Math.random() - 0.5);
}
embaralhar();
const palavraSorteada = palavras[0];
const separarPalavra = palavraSorteada.split("");

function esconderPalavra() {
    let esconder = "-";
    for(let i = 0; i < palavraSorteada.length; i++) {
        separarPalavra[i] = esconder;
    }
    return separarPalavra;

}
const resultado =  esconderPalavra();
console.log(resultado);