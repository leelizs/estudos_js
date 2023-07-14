const prompt = require('prompt-sync')({ sigint: true });

const navios = ['N',1,'N','N','N',1,'N','N','N'];

function embaralhar() {
    navios.sort(()=> Math.random() - 0.5);
}

embaralhar();

function verificaNavio() {
    while(navios[0] == 1) {
        embaralhar();
        if(navios[0] == 1) {
            console.log("[BOOM], Você perdeu!");
           
        }
        else {
            "Navio continua intacto!";
        }
    }
}

const a = verificaNavio();

console.log(a);

