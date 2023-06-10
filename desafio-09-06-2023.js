// crie uma função que ela receba 4 números
// e retorne a multiplicação deles.

/* function num(a, b, c, d) {
    return a * b * c * d;

}

const resultado = num(10,2,4,6);

console.log(resultado); */

// faça uma função que recebe um objeto como parâmetro
// esse objeto contém as propriedades: a, b, c, d
// essa função deve retornar a soma destas quatro propriedades

// a.b acessar a propriedade b do objeto a

/* const num = {
    a: 5,
    b: 7,
    c: 9,
    d: 20
}

function soma(a) {
    return a.a + a.b + a.c + a.d;
}

const resultado = soma(num);

console.log(resultado); */

// faça uma função que receba como parâmetro um array de números
// e retorne a soma deles

const num = [4,6,9,10];

function soma(a) {
    let soma = 0;
    for(let i = 0; i <= a.length - 1; i = i + 1) {
        soma = soma + a[i];
    }
    return soma;
}

const resultado = soma(num);

console.log(resultado);

