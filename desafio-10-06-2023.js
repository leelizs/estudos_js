/* const alunos = [];

alunos.push({
    nome: "Léo",
    nota1: 6,
    nota2: 8,
    nota3: 9,
    nota4: 4,
    media: 0
})

alunos.push({
    nome: "Anderson",
    nota1: 7,
    nota2: 7,
    nota3: 8,
    nota4: 9,
    media: 0
})

console.log(alunos);

function media(a, b, c, d) {
    return (a + b + c + d) / 4;
}

for (let i = 0; i <= alunos.length - 1; i = i + 1) {
    alunos[i].media = media(alunos[i].nota1, alunos[i].nota2,
        alunos[i].nota3, alunos[i].nota4);
}

console.log(alunos); */

/* const num = [4,2,5,6];

 function soma(a) {
    let soma = 1;
    for(let i = 0; i <= a.length - 1; i = i + 1 ) {
        soma = soma * a[i];
    }
    return soma;
}

const resultado = soma(num);

console.log(resultado); */

// exercício 1

/* function hello(a) {
    return a;
}

const print = hello("bom dia, mundo!");

console.log(print); */

// exercício 2

/* function calcular(num) {
    return num*num*num;
}

// exercício 3

const resultado = calcular(6);

console.log(resultado); */

/* function converter(f) {
    let celsius = (f - 32) * (5 / 9)
    return celsius;
}

const resultado = converter(212);

console.log(resultado + "C"); */

// exercício 4

/* function areaT(a, b) {
    let area = (a * b) / 2;
    return area;
}

const resultado = areaT(5, 15);
console.log("Área: " + resultado + "cm²"); */

// exercício 5



/* function areaCirculo(raio) {
    const area = Math.PI * raio * raio;
    const perimetro = 2 * Math.PI * raio;
    const resultado = {
        area: area,
        perimetro: perimetro
    }
    return resultado;
}

const ver = areaCirculo(10);

console.log(ver); */

/* function investimento(C,i,t) {
    const M = C * Math.pow((1 + i),t);
    return M;
}

const resultado = investimento(1000000,0.005,1);

console.log(resultado); */

/* function calcularFatorial(n) {
    let fatorial = 1;
    for(let i = 1; i <= n; i = i + 1) {
        fatorial = fatorial * i;
    }
    return fatorial;
}

const resultado = calcularFatorial(5);

console.log(resultado); */

/* function imprimir(n) {
    for(let i = 1; i <= n; i = i + 1) {
        console.log(i);
    }
}

imprimir(10); */

/* function imprimir(n) {
    for(let i = 1; i <= n; i = i + 1) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}

imprimir(100); */

/* function imprimir(n) {
    for(let i = 8; i <= n; i = i + 1) {
        if(i % 8 == 0) {
            console.log(i);
        }
    }
}

imprimir(80); */

/* function imprimir(n) {
    for(let i = 1; i <= 10; i = i + 1) {
        console.log(i * n);
    }
}

const resultado = imprimir(3);

for(let i = 1; i <= 10; i = i + 1) {
    console.log(" ");
    imprimir(i);
} */

/* function calcularFatorial(n) {
    let fatorial = 1;
    for(let i = 1; i <= n; i = i + 1) {
        fatorial = fatorial * i;
    }
    return fatorial
}

const resultado = calcularFatorial(3);

console.log(resultado); */

/* function calcularSoma(n) {
    let soma = 0;
    for(let i = 10; i <= n; i++) {
        if(i % 2 == 1) {
            //soma = soma + i;
            soma += i;
            //i = i + 2;
            //++;
            //i++;
            console.log(i);
        }
    }
    return soma;
}

const resultado = calcularSoma(30);

console.log(resultado); */

/* const n = [2,3,6,7,8,3];

let soma = 0;
for(let i = 0; i < n.length; i++) {
    soma = soma + n[i];
}

console.log(soma); */

/* const n = [6,7,8,4,8,9];

let media = 0;
for(let i = 0; i < n.length; i++) {
    media = (media + n[i]);
}
media = media / n.length;

console.log(media); */

/* function retornarArray(n) {
    const vazio = [];
    for(let i = 0; i < n.length; i++) {
        if(n[i] > 0 && n[i] < 5) {
            vazio.push(n[i]);
        }
    }
    return vazio;
}
const nm = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
const resultado = retornarArray(nm);

console.log(resultado); */

function juntarArray(n,n2) {
    const newArray = [];
    for(let i = 0; i < n.length; i++) {
        newArray.push(n[i]);
    }
    for(let i = 0; i < n2.length; i++) {
        newArray.push(n2[i]);
    }
    return newArray;
}

const nm = [1,2];
const nm2 = [3,4];
const resultado = juntarArray(nm,nm2);
console.log(resultado);

