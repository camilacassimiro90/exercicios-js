// Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”). No segundo, pergunte o primeiro valor que deseja calcular. No terceiro, o segundo valor que deseja calcular. Em seguida, realize o cálculo e exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

var num1 = Number(prompt('Entre com o 1º valor: '))
var op = prompt('Entre com a operação: ')
var num2 = Number(prompt('Entre com o 2º valor: '))

switch (op) {
  case '+':
    resultado = num1 + num2
    alert(
      'O resultado do seu cálculo é: ' +
        resultado +
        ', onde ' +
        resultado +
        ' é o resultado final do cálculo solicitado pelo usuário.'
    )
    break

  case '-':
    resultado = num1 - num2
    alert(
      'O resultado do seu cálculo é: ' +
        resultado +
        ', onde ' +
        resultado +
        ' é o resultado final do cálculo solicitado pelo usuário.'
    )
    break

  case '/':
    resultado = num1 / num2
    alert(
      'O resultado do seu cálculo é: ' +
        resultado +
        ', onde ' +
        resultado +
        ' é o resultado final do cálculo solicitado pelo usuário.'
    )
    break

  case '*':
    resultado = num1 * num2
    alert(
      'O resultado do seu cálculo é: ' +
        resultado +
        ', onde ' +
        resultado +
        ' é o resultado final do cálculo solicitado pelo usuário.'
    )
    break
  default:
    alert("Operação não escolhida");
}
