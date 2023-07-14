const prompt = require('prompt-sync')({ sigint: true });

const tabuleiro = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
];

function renderizarTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        let linhas = ''
        for (let j = 0; j < tabuleiro[i].length; j++) {
            linhas = `${linhas} ${tabuleiro[i][j]}`
        }
        console.log(linhas)
    }
}

function testaEmpate() {
    let isCasaVazia = false
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            if (tabuleiro[i][j] == '-') {
                isCasaVazia = true
            }
        }
    }
    return !isCasaVazia
}

function verificaVencedor() {
    if (testaEmpate()) {
        return 0
    }

    /////////////////

    if (tabuleiro[0][0] == 'X' && tabuleiro[0][1] == 'X' && tabuleiro[0][2] == 'X') {
        return 1
    }

    if (tabuleiro[1][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[1][2] == 'X') {
        return 1
    }

    if (tabuleiro[2][0] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X') {
        return 1
    }

    if (tabuleiro[0][0] == 'X' && tabuleiro[1][0] == 'X' && tabuleiro[2][0] == 'X') {
        return 1
    }

    if (tabuleiro[0][1] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X') {
        return 1
    }

    if (tabuleiro[0][2] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X') {
        return 1
    }

    if (tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X') {
        return 1
    }

    if (tabuleiro[0][2] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][0] == 'X') {
        return 1
    }

    //////////////////////////

    if (tabuleiro[0][0] == 'O' && tabuleiro[0][1] == 'O' && tabuleiro[0][2] == 'O') {
        return 2
    }

    if (tabuleiro[1][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[1][2] == 'O') {
        return 2
    }

    if (tabuleiro[2][0] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O') {
        return 2
    }

    if (tabuleiro[0][0] == 'O' && tabuleiro[1][0] == 'O' && tabuleiro[2][0] == 'O') {
        return 2
    }

    if (tabuleiro[0][1] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'O') {
        return 2
    }

    if (tabuleiro[0][2] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O') {
        return 2
    }

    if (tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O') {
        return 2
    }

    if (tabuleiro[0][2] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][0] == 'O') {
        return 2
    }

    return -1

}

let jogadorDaVez = 'X'
let vencedor = ''

const jogador1 = prompt('Digite o nome do jogador 1 (X): ')
const jogador2 = prompt('Digite o nome do jogador 2 (O): ')

/*function pegaPosicao(isLinha) {
    let isError = true
    let valor = 0
    while(isError) {
        let linha = 0
        if(isLinha) {
            linha = parseInt(prompt('Digite o número da linha: '), 10)
        } else {
            linha = parseInt(prompt('Digite o número da coluna: '), 10)
        }
        if(Number.isNaN(linha)) {
            console.log('Dígite somente números')
            isError = true
        } else {
            if(!(linha >= 1 && linha <= 3)) {
                console.log('Digite um número entre (1-3)')
                isError = true
            } else {
                valor = linha
                isError = false
            }
        }
    }
    return valor
}*/



function pegaCoordenadas() {
    let isError = true
    let valores = {
        x: 0,
        y: 0
    }
    while (isError) {
        let x = 0
        let y = 0

        let coordenadas = prompt('Digite as coordenadas: ')

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
                if (!(x >= 1 && x <= 3)) {
                    console.log('Digite números entre (1-3)')
                    isError = true
                    continue
                }
            }

            if (Number.isNaN(y)) {
                console.log('Dígite somente números')
                isError = true
                continue
            } else {
                if (!(y >= 1 && y <= 3)) {
                    console.log('Digite números entre (1-3)')
                    isError = true
                    continue
                }
            }
            //console.log(tabuleiro[x][y])

            if (tabuleiro[x - 1][y - 1] !== '-') {
                console.log('Essa coordenada já está sendo ocupada!!!')
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

while (status == -1) {

    if (jogadorDaVez == 'X') {
        console.log(`${jogador1}(X) sua vez de jogar`)
    } else {
        console.log(`${jogador2}(O) sua vez de jogar`)
    }
    console.log()
    //const linha = pegaPosicao(true)
    //const coluna =  pegaPosicao(false)
    const valores = pegaCoordenadas()
    tabuleiro[valores.x - 1][valores.y - 1] = jogadorDaVez
    if (jogadorDaVez == 'X') {
        jogadorDaVez = 'O'
    } else {
        jogadorDaVez = 'X'
    }
    console.clear()
    renderizarTabuleiro()
    console.log()
    status = verificaVencedor()
}

switch (status) {
    case 0:
        console.log('Empate!!!')
        break;
    case 1:
        console.log(`${jogador1}(X) Venceu!!!`)
        break;
    case 2:
        console.log(`${jogador2}(O) Venceu!!!`)
        break;
}

