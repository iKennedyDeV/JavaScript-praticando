candidatos = []
for (i=0;i <3;i++ ){
 candidatos[i] = parseInt(prompt('insira o votos cadidato ' + i + ':'))
}
voto_nulo = parseInt(prompt ('insira os votos nulos: '))
voto_branco = parseInt( prompt ('insira os votos brancos: '))
console.clear()
for (i=0;i < candidatos.length;i++){
 votonulobranco = voto_branco + voto_nulo
 votos_total = ( candidatos[0] + candidatos[1] + candidatos[2] +
votonulobranco)
}
 alert('votos totais:' + votos_total)
alert ('porcentagem votos biden: ' +
(candidatos[0]/votos_total).toFixed(2)*100 + "%")
alert ('porcentagem votos bolsonaro : ' +
(candidatos[1]/votos_total).toFixed(2)*100 + "%")
alert ('porcentagem votos lula: ' +
(candidatos[2]/votos_total).toFixed(2)*100 + "%")
alert ('porcentagem votos brancos: ' +
(voto_branco/votos_total).toFixed(2)*100 + "%")
alert ('porcentagem votos lula: ' +
(voto_nulo/votos_total).toFixed(2)*100 + "%")