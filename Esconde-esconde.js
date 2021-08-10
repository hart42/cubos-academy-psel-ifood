function solucao(numero) {
	let indice = 1;
    if (numero <= 20){
        console.log("VOCE CONSEGUE, MANINHO")
    }else {
        numero = numero - 20;
        while (indice <= numero){
            console.log((indice + 20));
            indice ++;
        }
    }
}