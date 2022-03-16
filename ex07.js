// Faça 2 prompts ao usuário: no primeiro, pergunte o ano de nascimento. No segundo, pergunte o ano atual. Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

var anoAtual = prompt('Digite o ano vigente')
var anoNasc = prompt('Digite o seu ano de nascimento')

var idade = anoAtual - anoNasc;
var idadeReduzida = idade - 1

alert('Sua idade é: ' + idade + ", se não fez niver ainda, sua idade é " + idadeReduzida);
