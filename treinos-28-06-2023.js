const prompt = require('prompt-sync')({ sigint: true });

let roleta = [0,0,0,0,0,1];

const jogador = prompt('Digite o seu nome para o jogo começar: ');
console.clear();

function embaralhar() {
    roleta.sort(()=> Math.random() - 0.5);
}

embaralhar();

function verificaTiro() {
    let acabou = false;
    while(acabou == false) {
        embaralhar();
        if(roleta[0] == 1 ) {
            acabou = true;
        }
        if(acabou === true) {
            console.log(`${jogador} levou um tiro!`);
        } else {
            console.log(`${jogador} sobreviveu a rodada!`);
        }
    }
}

verificaTiro();

console.log(roleta);