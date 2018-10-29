let noppa;
let silmäluku;
let lista=[];

noppa = prompt('Anna noppien lukumäärä. ');

do{
    silmäluku=parseInt(Math.random() *(6 -1) +1);
    lista.push(silmäluku);

}while(lista.length<noppa);
document.write(lista);