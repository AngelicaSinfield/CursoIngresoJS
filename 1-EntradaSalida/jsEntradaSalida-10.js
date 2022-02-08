/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	porcentaje = prompt("Inserte porcentaje aqui");
	porcentaje = parseInt(porcentaje);

	resultado = importe - importe * (porcentaje /100);
	

	document.getElementById("txtIdResultado").value=resultado;




}
