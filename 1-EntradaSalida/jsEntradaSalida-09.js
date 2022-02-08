/* Angelica Sinfield
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
	var porcentaje;
	var resultado;

	importe = parseInt(document.getElementById("txtIdSueldo").value);

	porcentaje = prompt("Inserte porcentaje aqui");

	resultado = importe * (parseInt(porcentaje) / 100) + importe;

	document.getElementById("txtIdResultado").value=resultado;

     
}
