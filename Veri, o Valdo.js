function solucao(obras) {
	let maior = 0;
    let titulo = "a";
    
    for (const arte of obras){
        if (arte.valor > maior){
            maior = arte.valor;
            titulo = arte.nome;
        }
    }
    console.log(titulo)
    
}
