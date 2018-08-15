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
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papelito);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue"
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-movimiento, papelito);
      y = y -movimiento;
    break;
    case teclas.DOWN:

      dibujarLinea(colorcito, x, y, x, y+movimiento, papelito);
      y = y + movimiento;
    break;
    case teclas.LEFT:

      dibujarLinea(colorcito, x-movimiento, y, x, y, papelito);
      x = x - movimiento;

    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x+movimiento, y, x, y, papelito);
      x = x + movimiento;

    break;

}
}
