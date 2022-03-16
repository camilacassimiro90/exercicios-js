// Construa um script que alerta o horário no momento de acesso, no formato “23:59” (HH:mm). Use o objeto Date do JavaScript.

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

alert(`Agora são ${hora}:${min} horas`)
