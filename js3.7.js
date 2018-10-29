
let luku;
let i = 0;
let a = 0;
let n = 1;
do {
    while(i < 5) {
        luku = + Math.random() * (4*n - (4*n-3)) + (4*n-3);
        document.write(luku.toFixed() + ', ' );
        n++;
        i++;
    }

document.write('<br>');
i = 0;
a++;
}while(a<5);
