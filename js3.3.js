let aloitus, lopetus, lista;
aloitus = + prompt('Anna aloitus vuosi ');
lopetus = + prompt('Anna lopetus vuosi');

 lista = '<ul>';
do{
    if((aloitus % 4 ==0) && (aloitus%100 !=0) || (aloitus %400 == 0)) {
        lista += '<li>' + aloitus + '</li>';
        aloitus +=1;
    }

     else{
        aloitus +=1;
    }

}while(aloitus<=lopetus);
lista += '</ul>';

document.getElementById('moi').innerHTML = lista;