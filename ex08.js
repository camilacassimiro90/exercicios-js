// Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”). No segundo, pergunte o primeiro valor que deseja calcular. No terceiro, o segundo valor que deseja calcular. Em seguida, realize o cálculo e exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

var operação = prompt('Qual tipo de cálculo deseja fazer?')
var num1 = prompt('Digite um valor')
var num2 = prompt('Digite outro valor')
var resultado = operação
alert(
  'O resultado do seu cálculo é: ' +
    num1 +
    operação +
    num2 +
    'onde' +
    resultado +
    'é o resultado final do cálculo solicitado pelo usuário.'
)
