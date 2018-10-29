let luku;
luku = parseInt(prompt('Anna kokonaisluku. '));
let i = 2;

do{
    if(luku == 2){
        document.write('Luku on alkuluku. ');
        break;
    }
    if(luku % i ==0){
        document.write('Luku ei ole alkuluku. ');
        break;
    }
else{
        i +=1;
    }
}while(i < luku);
if(luku ==i) {
    if(luku!=2) {
        document.write('Luku on alkuluku. ');
    }
}
