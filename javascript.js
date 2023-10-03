alert('Olá, Pessoa! 😊')
var nome = prompt('Digite seu nome:')
alert('Para acessar a página ' + nome + ', realize um pequeno desafio. ' + 'Digite um número que siga os seguintes critérios: ser par, positivo e ser menor que 100.')

var n = parseInt(prompt('Digite o número:'));
var resto = n % 2;

if (n > 0 && n < 100 && resto == 0 ) {
    console.log (n + 'par');
    alert ('O número atende aos critérios.')

    alert('Seja Bem-Vindo! 😉')
}else{
    console.log(n + 'impar');
    alert('O número não atende aos critérios.')

    alert('Acesso negado! 😢')
}