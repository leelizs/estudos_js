/* const sinal = "kkskskksks";

if (sinal == "verde") {
    console.log("pode passar!");
}
else if (sinal == "amarelo") {
    console.log("cuidado!");
}
else if (sinal == "vermelho") {
    console.log("o sinal está fechado!");
}
else {
    console.log("por favor, digite algo válido.");
} */
/* const sinal = "roxo";

switch (sinal) {
    case "verde":
        console.log("pode passar!");
        break;
    case "amarelo":
        console.log("cuidado!");
        break;
    case "vermelho":
        console.log("o sinal está fechado!");
        break;
    default: 
        console.log("cade meu pai?????????????????????????????????????????????")
} */
/* let i = 0;
while (i < 10) {
    console.log(i);
    i = i + 1
} */

/* const a = ['leo','foi','abandonado','pelo','pai'];
const b = 7;
console.log(a[3]);
console.log(a);
a.push('meu pai sumiu');
console.log(a);
console.log(a.length);

for (let i = 0; i < a.length; i = i + 1) {
    console.log(a[i]);
} */

/* let a = {
   nome: 'leo',
   sobrenome: 'melo',
   endereco: {
       rua: 'parapuã',
       numero: '330'
   },
   nascimento: {
       data: '20/06/2005'
   }
}
/* a = ['leo','foi','abandonado','pelo','pai']; */
/* console.log(a.nascimento); */

/* const notas = [1,2,3,9];

let soma = 0;

for (let i = 0; i < notas.length; i = i + 1) {
    soma = soma + notas[i]
}
const media = soma / notas.length;

console.log(media); */

/* const a = [];

a.push(2);

a.push(3);

a.push(4);

a.push(5);

let resultado;
resultado = 1;
// [2,3,4,5]
for (let i = 0; i <= a.length - 1; i = i + 1) {
    console.log(resultado);
    resultado = resultado * a[i];
    console.log(resultado);
}  */

// i = 0; resultado = 1; resultado = 2;
// i = 1; resultado = 2; resultado = 6;
// i = 2; resultado = 6; resultado = 24;
// i = 3; resultado = 24; resultado = 120;

/* for (let i = 20; i < 100; i = i + 1) {
    console.log("olá mundo");
    console.log(i);
} */

// iteração 0; i = 0;
// iteração 1; i = 1;
// primeiro executa a inicialização
// segundo executa a condição
// terceiro executa os comandos do for
// quarto executa o ecremento
// quinto executa a condição
// sexto executa os comandos do for
// sétimo executa o ecremento

/* for (let i = 35; i <= 400; i = i + 1) {
    console.log(i + 10);
} */

/* function teste (a,b) {
    console.log(a);
    console.log(b);
}

teste ("pai?", "bebida?");
teste ("por que", "cigarro?");
teste ("me abandonou?", "mulher?"); */

/* function teste(a, b, c) {
    for (let i = a; i <= b; i = i + 1) {
        console.log(c);
        console.log(i);
    }
}

teste(0, 100, "dino"); */

/* const a = [];

a.push(55);

a.push(64);

a.push(487);

a.push(1035);

let resultado
resultado = 1;

    function teste(b) {
        for (let i = b; i <= a.length - 1; i = i + 1) {
            console.log(resultado);
            resultado = resultado * a[i];
            console.log(resultado);
        }
    }
    teste(0);
    teste(0); */

    

    /* function qualquer(c) {
        const d = 5;
        console.log(c + d);
    }

    qualquer(1);
    qualquer(1); */

    /* let anderson = 1;
    console.log(anderson);

    if(true) {
        let anderson = 3;
        console.log(anderson);
        if(true) {
            let anderson = 4;
            anderson = 5;
            console.log(anderson);
        }
        console.log(anderson);
    }

    console.log(anderson);


    let leo = 1;
    leo = 5;

    console.log(leo); */

    /* let leo = 1;

    function teste(a) {
        let leo = 1;
        const anderson = 1;
        console.log(anderson + a + leo);
        leo = leo + 1;
    }

    teste(2);
    teste(2); */

   /*  const a = 1;

    console.log(a);

    {
        const a = 2;
        console.log(a);

    }

    console.log(a); */

    const alunos = [];

    alunos.push({
        nome: "Pedro",
        nota1: 6,
        nota2: 9,
        nota3: 5,
        nota4: 10,
        media: 0
    })

    alunos.push({
        nome: "Anderson",
        nota1: 9,
        nota2: 9,
        nota3: 8,
        nota4: 10,
        media: 0
    })

    function media(a, b, c, d) {
        return (a + b + c + d) / 4;
    }

    for(let i = 0; i < alunos.length; i = i + 1) {
        alunos[i].media = media(alunos[i].nota1, alunos[i].nota2, alunos[i].nota3, alunos[i].nota4)
    }

    console.log(alunos);