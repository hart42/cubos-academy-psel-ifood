function solucao(precos) {
    let total = 0;
    let indice = 0;
    let maior = false;
    
    while(indice < precos.length){
        total += precos[indice];
        if (precos[indice]> 200){
            maior = true;
        }
        indice ++;
    }
    if (total > 1000){
        if (maior === true){
            console.log("PREMIUM")
        }else {
            console.log("VIP")
        }
    }else{
        console.log("NORMAL")
    }
}
