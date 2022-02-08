function mostrar()

{
	var auto;
	var marca;

	auto = document.getElementById("txtIdEdad").value;

	if(auto == "auto")

	{
		marca = prompt("Ingrese marca: ");
		alert("Su marca es " + marca);
	}

}