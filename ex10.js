// Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, e outro um valor para a “raíz”. Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.

var valorInicial = Number(prompt('Digite um valor'))
var raiz = Number(prompt('Digite outro valor'))
var resultado = [valorInicial]
for (i = 1; i <= 10; i++) {
  valorInicial += raiz
  resultado.push(valorInicial)
}
alert(resultado.join('-'))
