function solucao(primeiraLetra, segundaLetra, palavras) {
    let cont = 0;
    
	for (const item of palavras){
        if (item[0] == primeiraLetra){
            if (item[1] == segundaLetra){
                console.log(item);
                cont += 1;
            }
        }
    }
    if (cont === 0){
        console.log("NENHUMA")
    }

}