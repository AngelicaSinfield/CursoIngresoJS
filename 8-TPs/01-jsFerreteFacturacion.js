/*1. Angelica Sinfield
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var precioUno
    var precioDos
    var precioTres
    var resultado

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = (precioUno + precioDos + precioTres);

    alert("la suema es " + resultado);

}
function Promedio () 
{
	var precioUno
    var precioDos
    var precioTres
    var productos
    var resultado

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    productos = (precioUno + precioDos + precioTres);

    resultado = productos / 3;
     alert("el promedio es " + resultado);
}
function PrecioFinal () 
{
	var precioUno
    var precioDos
    var precioTres
    var suma
    var porcentaje
    var resultado

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = (precioUno + precioDos + precioTres);

    porcentaje = suma * 21 / 100;

    resultado = suma + porcentaje;

    alert("el resultado el " + resultado);
    
}