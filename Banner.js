img = new Array('1','2','3','4');
indice = 0;
 
setInterval("mudarImagem()", 4500);
	
function mudarImagem(i) {
 
	if (i == 0 || i == 1 || i == 2 || i == 3) {
		indice = i;
	}else{
		if (indice == img.length - 1) {
			indice = 0;	
		}else{
			indice++;
		}
	}
	
	document.getElementById("banner_img_1").setAttribute("class", "");
	document.getElementById("banner_img_2").setAttribute("class", "");
	document.getElementById("banner_img_3").setAttribute("class", "");
	document.getElementById("banner_img_4").setAttribute("class", "");
	document.getElementById("banner_img_" + img[indice]).setAttribute("class", "hover");
	document.getElementById("banner_img").innerHTML = "<a style='background:none;' href='contato.html'><img src='banner_img/"+ img[indice] +".jpg' width='791' height='228' border='0' alt='Banner'></a>";
}