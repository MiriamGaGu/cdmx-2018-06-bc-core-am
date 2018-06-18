//alert("hola"); //verificar que lee app
const cifrar = () => {//declaro  onclick en la funcion
let userText = document.getElementById('userText').value;//traigo el elemento input de HTML co id userText
console.log(userText);//hago un console log para verificar que entra la data

let txtCif = ""; //hago una let vacia donde los datos seran almacenados

for (var i = 0; i < userText.length; i++) {// hago un for para hacer el ciclo de cifrado a mi texto ingresado
console.log(userText);
  if (parseInt(userText[i]) %1 === 0) {
    alert("Ingresa sólo texto sin número");//si meten numero mostrara el alert
  }//aqui cierra if

else if (userText.charCodeAt(i)===32){
    let space = " ";
    txtCif += space
  }//aqui cierra else if

else if (userText.charCodeAt(i) >=65 && userText.charCodeAt(i) <=90) {// && para que compare ambas
 let mayus = (userText.charCodeAt(i) - 65 + 33) %26 + 65; //el let ejecuta laformula para asignarle un numero del codigo ASCII
 let text1 = String.fromCharCode(mayus);
    txtCif += text1;
console.log(mayus);
}//aqui cierra else if

else if (userText.charCodeAt(i) >=97 && userText.charCodeAt(i) <=122){
  let minus = (userText.charCodeAt(i) -97 + 33)% 26 + 97;
  let text2 = String.fromCharCode(minus);
  txtCif += text2;
  console.log(minus);
  }//esta cierra else if
document.getElementById('devolver').innerHTML = "Tu mensaje cifradodo es:" + " " + txtCif;
}//esta cierra for
}// esta cierra funcion

const descifrar = () => {
  console.log(descifrar);
  let userText2 = document.getElementById('descifrar').value;
console.log(userText2);
  let txtDesCif = "";

  for (var u = 0; u < userText2.length; u++) {

if (userText2.charCodeAt(u)===32){
    let space = " ";
    txtDesCif += space //me faltaba declarar la variable para aplicar el espacio
  }//cierra primer if

else if (userText2.charCodeAt(u) >=65 && userText2.charCodeAt(u) <=90) {
     let mayus2 = (userText2.charCodeAt(u) + 65 - 33) %26 + 65;
     let text3 = String.fromCharCode(mayus2);
        txtDesCif += text3;
    console.log(mayus2);
}//cierra else if mayus

else if (userText2.charCodeAt(u) >=97 && userText2.charCodeAt(u) <=122) {
     let minus2 = (userText2.charCodeAt(u) -122 - 33)% 26 + 122;
     let text4 = String.fromCharCode(minus2);
     txtDesCif += text4
     console.log (text4);
}// cierra 2 else if

document.getElementById('descifrado').innerHTML = "Tu mensaje descifra es :" + " " + txtDesCif;

}// for
}//termina función
