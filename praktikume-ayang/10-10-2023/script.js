function fungsi(){
    var n = document.getElementById('nama').value;
    var k = document.getElementById('nim').value;
    var a = document.getElementById('angka').value;
    if (k.length == 9) {
        document.getElementById('out').innerHTML = "Selamat datang Kak " + n + "<br><br>" + "NIM Anda adalah " + k;
    }
    else{
        document.getElementById('out').innerHTML = "Selamat datang Kak " + n + "<br><br>" + "NIM yang Anda masukkan kurang tepat. Silahkan masukkan data NIM yang benar ";
    }
    switch (a%2){
        case 0:
        document.getElementById('outlagi').innerHTML = "Angka favorit anda termasuk bilangan genap";
        break;
        case 1:
        document.getElementById('outlagi').innerHTML = "Angka favorit anda termasuk bilangan ganjil";
        break;
    }
    var f = 1;
    /*for (a; a > 1; a--) {
        f = f*a;
    }*/
    while (a > 1){
        f = f*a;
        a--;
    }
    document.getElementById('outfaktorial').innerHTML = "Nilai faktorial dari angka favorit anda adalah " + f;
}