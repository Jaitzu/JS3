let luku, i;
luku = prompt('Anna yläraja parillisille luvuille.');
for (i = luku - 1; i>0 ; i--) {
    if(i == luku -1){
        document.write('Käytetyt luvut: ' + luku)
    }
    luku = luku * i;
    document.write(i);

}
document.write('<br>' + 'Kertoma =' + luku);