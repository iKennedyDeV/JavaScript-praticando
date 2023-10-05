peso = parseFloat(prompt('Informe o peso (kg): '))
altura = parseFloat(prompt('Informe a altura (m): '))
sexo = prompt('Informe o sexo (f/m): ')
imc = peso/(altura*altura)
if(sexo != 'm' && sexo != 'f' && peso > 0 && altura > 0){
alert('Dado inválido')
}
else{
alert('IMC: ' + imc.toFixed(2))
if(sexo == 'm'){
//parâmetros masculino
if(imc < 20){
alert('Abaixo do normal')
}
else if(imc < 25){
alert('Normal')
}
else if(imc < 30)
{
alert('Obesidade leve')
}
else if(imc < 40){
alert('Obesidade Moderada')
}
else{
alert('Obesidade Mórbida')
}
}
else if(sexo == 'f'){
//parâmetros femininos
if(imc < 19){
alert('Abaixo do normal')
}
else if(imc < 24){
alert('Normal')
}
else if(imc < 29)
{
alert('Obesidade leve')
}
else if(imc < 39){
alert('Obesidade Moderada')
}
else{
alert('Obesidade Mórbida')
}
}
}
