const {execSync} = require('child_process');
const prompt = require('prompt-sync')({ sigint: true });

let baralho = [
    'A', 'A', 
    'B', 'B', 
    'C', 'C', 
    'D', 'D', 
    'E', 'E', 
    'F', 'F', 
    'G', 'G', 
    'H', 'H', 
    'I', 'I', 
    'J', 'J'
]

baralho = baralho.map(value => ({ valor: value, cima: false }))

function embaralhar() {
    baralho.sort(()=> Math.random() - 0.5);
}

embaralhar()

function pegaPosicoesCartas() {
    let isError = true
    let valores = {
        x: 0,
        y: 0
    }
    while (isError) {
        let x = 0
        let y = 0

        let coordenadas = prompt('Digite as posições: ')

        coordenadas = coordenadas.trim()

        coordenadas = coordenadas.split(' ')

        if (coordenadas.length != 2) {
            console.log('Dígite 2 números com espaços!!!')
            isError = true
            continue
        } else {
            x = parseInt(coordenadas[0], 10)
            y = parseInt(coordenadas[1], 10)

            if (Number.isNaN(x)) {
                console.log('Dígite somente números')
                isError = true
                continue
            } else {
                if (!(x >= 1 && x <= baralho.length)) {
                    console.log(`Digite números entre (1-${baralho.length})`)
                    isError = true
                    continue
                }
            }

            if (Number.isNaN(y)) {
                console.log('Dígite somente números')
                isError = true
                continue
            } else {
                if (!(y >= 1 && y <= baralho.length)) {
                    console.log(`Digite números entre (1-${baralho.length})`)
                    isError = true
                    continue
                }
            }

            if(baralho[x - 1].cima) {
                console.log('Essa carta ja está virada!!!')
                isError = true
                continue
            }

            if(baralho[y - 1].cima) {
                console.log('Essa carta ja está virada!!!')
                isError = true
                continue
            }

            isError = false
            valores.x = x
            valores.y = y
        }


    }
    return valores
}

let status = -1

function verificaFimDoJogo() {
    let acabou = true
    for(let i = 0; i < baralho.length; i++) {
        if(!baralho[i].cima) {
            acabou = false
        }
    }
    
    if(acabou === true) {
        return 0
    } else {
        return -1
    }
    
}

function desenharTabuleiro() {
    let texto = ''
    let resposta = ''
    let posicoes = ''
    for(let i = 0; i < baralho.length; i++) {
        if(baralho[i].cima) {
            if(i + 1 >= 10) {
                texto = `${texto}  ${baralho[i].valor}`
            } else {
                texto = `${texto} ${baralho[i].valor}`
            }
        } else {
            if(i + 1 >= 10) {
                texto = `${texto}  -`
            } else {
                texto = `${texto} -`
            }
        }
        if(i + 1 >= 10) {
            resposta = `${resposta}  ${baralho[i].valor}`
        } else {
            resposta = `${resposta} ${baralho[i].valor}`
        }
        posicoes = `${posicoes} ${i + 1}`
    }
    //console.log(posicoes)
    //console.log()
    //console.log(resposta)
    //console.log()
    console.log(texto)
}

function limpar() {
    console.clear()
}

function pause(segundos) {
    for(let i = 0; i < segundos; i++) {
        execSync('sleep 1');
    }
}

while (status == -1) {
    const { x, y } = pegaPosicoesCartas()

    baralho[x - 1].cima = true
    baralho[y - 1].cima = true

    limpar()
    desenharTabuleiro()
    // 5 segundos 
    pause(5)
    if(baralho[x - 1].valor === baralho[y - 1].valor) {
        baralho[x - 1].cima = true
        baralho[y - 1].cima = true
    } else {
        baralho[x - 1].cima = false
        baralho[y - 1].cima = false
    }

    limpar()
    desenharTabuleiro()
    status = verificaFimDoJogo()
}

limpar()
console.log('Você ganhou!!!')

/*A B A B C C
0 1 2 3 4 5

- - - - - -

0 2

A - A - - -



A - A - - -*/