function solucao(sequencia) {
	const imagens = [0, 1, 2, 3, 4, 5, 6];
    let cont = 0;
    
    for (const seta of sequencia){
        if (seta === ">"){
            if (cont === 6){
                cont = 0;
            }else{
                cont += 1;
            }
            
            }else if (seta === "<"){
                if (cont === 0){
                    cont = 6;
                }else{
                    cont -= 1;
                }
                
            }
    }
    
    console.log(cont);

}