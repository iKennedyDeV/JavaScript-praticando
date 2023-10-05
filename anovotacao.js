ano_atual = prompt ('insira o ano que irá votar: ');
data_nascimento = prompt ('insira seu ano de nascimento:');
ano = (ano_atual - data_nascimento)
if ( ano >= 16){
 alert('com ' + ano + ' anos' + ' você pode votar')
}
 else{
 alert('com ' + ano + ' anos' + ' voce nao podera votar')
 }