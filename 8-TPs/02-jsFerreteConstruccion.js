/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;
    var resultado;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);
    perimetroTerreno = (largoTerreno + anchoTerreno) * 2;
    resultado = perimetroTerreno * 3; 

    alert("Usted necesita " + resultado + " metros de alambre.");


}
function Circulo () 
{
    var radioTerreno;
    var resultado;

    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);
    resultado = radioTerreno * 3;

	alert("Usted necesita " + resultado + " metros de alambre.");
}
function Materiales () 
{
    var anchoTerreno;
    var largoTerreno;
    var cal;
    var cemento;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);
    cal = (largoTerreno * anchoTerreno) * 3;
    cemento = (largoTerreno * anchoTerreno) * 2;

    alert("Se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento.");


}