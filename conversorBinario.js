suma=0;
numeros = [3,7,14,22,26,32,40,45,63,68,80,100,112,129,150,170,200,223,240,255];
numeroFinal = 255;
indiceArrayNumeros = 0;
numeroActual = numeros[indiceArrayNumeros];

window.onload = function(){ //Acciones tras cargar la página
	pantalla=document.getElementById("fuentevisible"); //elemento pantalla de salida

	divNumAct = document.getElementById("numeroActual");
	divNumAct.innerHTML = numeroActual;
	divNumAct.style.color = 'red';
	divNumAct.style.fontWeight = 'big';
}

	function pot_dos(pot){

		valorSumarRestar = (2**pot);

		//Obtengo la potencia presionada
		var posicion = document.getElementById(pot);
		var sumaValor = document.getElementById("+"+String(valorSumarRestar));

		//Analizo el valor y la cambio
		if (posicion.value == "0"){
			suma = suma+2**pot;
			posicion.value = "1";
			sumaValor.style.visibility = 'visible';
		}else{
			posicion.value = "0";
			suma = suma-2**pot;	
			sumaValor.style.visibility = 'hidden';
		}
		pantalla.innerHTML = suma;

		//Si lograron construir el numero buscado
		if (suma == numeroActual){
			//Si aun no llegaron al ultimo numero
			if (numeroActual < numeroFinal){
				
				nextButton = document.getElementById("nextButton");
				nextButton.style.visibility = 'visible';
			}else{
				botonReinicio = document.getElementById("reinicio");
				botonReinicio.style.visibility = 'visible';				
			}
		}
	}

	function siguiente(e){
		indiceArrayNumeros++;
		numeroActual = numeros[indiceArrayNumeros];
		divNumAct.innerHTML = numeroActual;
		nextButton.style.visibility = 'hidden';
		reset();
	}

	function reset(){
		for (i=0;i<8;i++){
			//Reseteo todos los botones a cero
			button = document.getElementById(i);
			button.value = "0";

			//Oculto todas las sumas
			potencia2 = 2**i;
			sumaValor = document.getElementById("+"+String(potencia2));
			sumaValor.style.visibility = 'hidden';

			//Pongo la pantalla a 0. Reinicio contador
			pantalla.innerHTML = 0;
			suma = 0;
		}
	}

	function reiniciar(){
		indiceArrayNumeros = 0;
		numeroActual = numeros[indiceArrayNumeros];
		divNumAct.innerHTML = numeroActual;
		botonReinicio = document.getElementById("reinicio");
		botonReinicio.style.visibility = 'hidden';	
		reset();
	}
