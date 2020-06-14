let url = "../src/img/slides/photos/";
let fotoAtual = 2;

function proximaFoto(){
  if(fotoAtual <= 0 || fotoAtual >= 43){
    document.getElementById("image").src=url + "1.jpg";
  }
    fotoAtual = fotoAtual + 1;
    document.getElementById("image").src=url + fotoAtual +".jpg";
}

function voltarFoto(){
  if(fotoAtual <= 0 || fotoAtual >= 43){
    document.getElementById("image").src=url + "2.jpg";
  }
    fotoAtual = fotoAtual - 1;
    document.getElementById("image").src=url + fotoAtual +".jpg";
 }