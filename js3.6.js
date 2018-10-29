let noppa;
let silmaluku;
let lista=[];
let summa;
let i= 1;
let a = 0;
let c = 1;
let todnak;
let sum;

noppa = + prompt('Anna noppien lukumäärä. ');
summa = + prompt('Anna noppien summa. ');

do{
while(i<=noppa){
    silmaluku=  Math.random() * (6 - 1) +1;
    lista.push( + silmaluku.toFixed());
    i ++;
}
sum = + lista.reduce((a, b) => a +b , 0);

if(sum == summa){
    a++;
    }
    i = i - noppa;
    c ++;

   lista = [];
}while(c <=1000);

document.write('Summasi ilmeni simulaatiossa 1000/' + a + ' kertaa');
todnak = a / 1000 * 100;
document.write('<br>'+ 'Eli todennäköisyys oli ' + todnak.toFixed(2) + '%');