function solucao(tamanhoBr) {
    const tamBr = ["PP", "P", "M", "G", "GG"];
    const tamUs = ["XS", "S", "M", "L", "XL"];
    let indice = 0;
    
    for (const item of tamBr){
        if (tamanhoBr === item){
            indice = tamBr.indexOf(item);
            break
        }
    }
    console.log(tamUs[indice])
  
}
