var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("areaDibujo");
var papelito =  cuadrito.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, papelito);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
switch (evento.keyCode) {
  case teclas.UP:
    console.log("arriba");
    break;
  case teclas.DOWN:
    console.log("abajo");
    break;
  case teclas.LEFT:
    console.log("IZQUIERDA");
    break;
  case teclas.RIGHT:
    console.log("RIGHT");
    break;

    default:
    console.log("otra tecla");

}

}
