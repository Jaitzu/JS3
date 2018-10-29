let luku;

luku = + prompt('Anna positiivinen luku');
while(luku < 0){
    luku = + prompt('Anna positiivinen luku');
}

luku = Math.sqrt(luku);
document.write('Luvun neliöjuuri on = ' + luku );