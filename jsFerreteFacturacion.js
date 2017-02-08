/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
	var producto2;
	var producto3;
	var resultado;

	producto1=document.getElementById('PrecioUno').value;
	producto2=document.getElementById('PrecioDos').value;
	producto3=document.getElementById('PrecioTres').value;

	producto1=parseint(producto1);
	producto2=parseint(producto2);
	producto3=parseint(producto3);

	resultado=parseint(producto1 + producto2 + producto3);
	alert("la suma es"+ resultado)
	
}
function Promedio () 
{
	producto1=document.getElementById('PrecioUno').value;
	producto2=document.getElementById('PrecioDos').value;
	producto3=document.getElementById('PrecioTres').value;

	producto1=parseint(producto1);
	producto2=parseint(producto2);
	producto3=parseint(producto3);

	resultado=parseint(producto1 + producto2 % producto3);
	alert("la suma es"+ resultado)
}
function PrecioFinal () 
{
	
}