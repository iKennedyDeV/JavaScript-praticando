ano = parseInt(prompt('Informe o ano desejado: '))
if((ano % 4 == 0) && (!(ano % 100 == 0))){
 alert('O ano é bissexto!')
}
else if(ano % 400 == 0){
 alert('O ano é bissexto!')
}
else{
 alert('O ano não é bissexto')
}