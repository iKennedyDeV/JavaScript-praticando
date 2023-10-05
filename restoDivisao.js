//operador resto da divisao por inteiros
/*
numero = parseInt(prompt('Digite um numero: '))
//par ou impar
if(numero % 2 == 0){
 alert('Par!')
}
else{
 alert('Ímpar!')
}
*/
valor = parseInt(prompt('Digite o valor desejado: '))
if(valor >= 200){
 alert('Cedulas de 200: ' + parseInt(valor/200))
 valor = valor % 200
}
if(valor >= 100){
 alert('Cedulas de 100: ' + parseInt(valor/100))
 valor = valor % 100
}
if(valor >= 50){
 alert('Cedulas de 50: ' + parseInt(valor/50))
 valor = valor % 50
}
if(valor >= 20){
 alert('Cedulas de 20: ' + parseInt(valor/20))
 valor = valor % 20
}
if(valor >= 10){
 alert('Cedulas de 10: ' + parseInt(valor/10))
 valor = valor % 10
}
if(valor >= 5){
 alert('Cedulas de 5: ' + parseInt(valor/5))
 valor = valor % 5
}
if(valor >= 2){
 alert('Cedulas de 2: ' + parseInt(valor/2))
 valor = valor % 2
}