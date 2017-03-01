function Mostrar()
{
	var numeroAnterior;
	var tienedivisor="no";
	var numRecorrido;
	var numeroingresado=prompt(numeroingresado);
	numeroingresado= parseInt(numeroingresado);

	//for(numRecorrido= 2;numRecorrido<numeroIngresado;numRecorrido++)
	for(numRecorrido= numeroingresado-1;numRecorrido>2;numRecorrido--)
	{
		//console.log(numRecorrido);
		tienedivisor="no";
		for(numeroAnterior=2;numeroAnterior<(numRecorrido/2);numeroAnterior++)
		{
			if (numRecorrido % numeroAnterior==0)
			{
				tienedivisor="si";
				break;
			}			
		}



		if(tienedivisor=='no')
		{
			console.log("es primo" + numRecorrido);
		}
	}


/*
						for(numeroAnterior=2;numeroAnterior<(numeroingresado/2);numeroAnterior++)
						{
							if (numeroingresado % numeroAnterior==0)
							{
								tienedivisor="si";
								break;
							}			
						}



						if(tienedivisor=='no')
						{
							console.log("es primo" + numeroingresado);
						}else
						{
							console.log("no es primo");
						}



*/

		
}//FIN DE LA FUNCIÓN
		
/* al generar numeros ramdom del 0 a 10 se debe contar la cantidad de cada una de estas cifras
 , repetir la interaccion para lanzar el ramdom 100.000 veces e informar 
 1- la cantidad de veces que salio cada numero del 0 a 10 
 2- el porcentaje de veces que salio cada numero con respecto al total 




}//FIN DE LA FUNCIÓN*/