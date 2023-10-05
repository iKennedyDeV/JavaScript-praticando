/*var numeros = [], aux;
for (var i=1 ; i < 10;i++){
 numeros[i] = prompt ('insira o numero ' + i );
}
for ( fixa =0; fixa < 10;fixa++){
for(var resto = (fixa+1); resto < 10;resto++){
 if( numeros[fixa] > numeros[resto]){
 aux = numeros[fixa];
 numeros[fixa] = numeros[resto];
 numeros[resto] = aux;
 }
}
}
 for(var i= 1;i < 10;i++){
 alert (numeros[i]);
 }
*/
numero = parseInt(prompt('Digite um numero 1:'))
menor = numero
maior = numero
//consultando outros 9 numeros
for(x=2;x<=10;x++){
 numero = parseInt(prompt('Digite um numero '+ x + ':'))
 if(numero > maior){
 maior = numero
 }
 else if(numero < menor){
 menor = numero
 }
}
console.clear()
alert('Menor: ' + menor)
alert('Maior: ' + maior)
 