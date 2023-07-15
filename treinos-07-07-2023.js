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
const palavraVirada = separarPalavra.map(item => ({
    letra: item,
    status: false
}) );

function desenharForca() {
    let forca = "";
    for(let i = 0; i < palavraVirada.length; i++) {
        forca = `${forca}${palavraVirada[i].status === false ? "-" : palavraVirada[i].letra}`
    }
    console.log(forca);
}



function revelaLetras(letra) {
    for(let i = 0; i < palavraVirada.length; i++) {
        if(palavraVirada[i].letra === letra) {
            palavraVirada[i].status = true;
        }
    }
}

desenharForca();
revelaLetras("a");
desenharForca();

/* function esconderPalavra() {
    let esconder = "-";
    for(let i = 0; i < palavraSorteada.length; i++) {
        separarPalavra[i] = esconder;
    }
    return separarPalavra;

} */
