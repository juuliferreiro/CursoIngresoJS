function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("falta para el invierno");
	break;

	case "Julio":
	case "Agosto":
	alert("abrigate que hace frio ")
	break;

	case "Septiembre":
	case"Octubre":
	case "Noviembre":
	case "Diciembre":
	alert("ya pasamos el frio, ahora caloe !!!")
}



}//FIN DE LA FUNCIÓN