//Komentar Per Baris
	/*Komentar bisa berbaris-baris
	Ini juga komentar*/
	function fungsi(){
		var n = document.getElementById('nama').value;
		var p = document.getElementById('pwd').value;
		var a1 = document.getElementById('angka1').value;
		var a2 = document.getElementById('angka2').value;
		var hasil1= parseFloat(a1)+parseFloat(a2);
		var hasil2= Math.pow(parseFloat(a1),parseFloat(a2));
		alert("Halo " + n + " Password Anda adalah " + p);
		document.getElementById('out1').innerHTML= "Hasil Angka Pertama ditambah Angka Kedua adalah " + hasil1;
		document.getElementById('out2').innerHTML= "Hasil Angka Pertama pangkat Angka Kedua adalah " + hasil2;
	}