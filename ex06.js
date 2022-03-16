// Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.

var sobrenome = prompt('Qual seu sobrenome?')
alert(
  'Olá, ' +
    sobrenome +
    '. Seu sobrenome contém ' +
    sobrenome.length +
    ' letras, onde ' +
    sobrenome.toUpperCase() +
    ' é em letras maiúsculas, e ' +
    sobrenome.length +
    ' é a quantidade desse sobrenome)'
)
