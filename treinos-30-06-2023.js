const prompt = require('prompt-sync')({ sigint: true });

const jogador = prompt('Olá! Bem vindo ao JoKenPô, digite o seu nome: ');

limpar();

const opcoesJogadas = {
    "1": "pedra",
    "2": "papel",
    "3": "tesoura"
};

const sorteio = Math.floor(Math.random() * 3) + 1;

function limpar() {
    console.clear();
}

function verificaJogada() {
    const jogada = prompt("Digite algo: ");
    limpar();
    console.log(`${jogador}: ${opcoesJogadas[jogada]} | PC: ${opcoesJogadas[sorteio]}`);

    return jogada;
}

function verificaVencedor() {
    const retornaValor = verificaJogada();
    if((retornaValor == 1 && sorteio == 1) || 
        (retornaValor == 2 && sorteio == 2) || 
        (retornaValor == 3 && sorteio == 3)) {
            console.log("Empate!");

    } else if((retornaValor == 1 && sorteio == 3) || 
    (retornaValor == 2 && sorteio == 1) || 
    (retornaValor == 3 && sorteio == 2)) {
        console.log(`Parabéns ${jogador}, você venceu no JoKenPô!`);

    } else {
        console.log(`Que pena ${jogador}, não foi dessa vez!`);
    }
    
}

function resultado() {
    //verificaJogada();
    verificaVencedor();
    console.log();
}

const mostrarResultado = resultado();

console.log(mostrarResultado);