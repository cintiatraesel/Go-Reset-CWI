
function imprimir(argumento){
    console.log(argumento);
}

imprimir(verificaMesmoNome("Caio", "Cassia"));

// Função retorna true ou false verificando se nomes são iguais
function  verificaMesmoNome (nomeDoFulano, nomeDoBeltrano){
  return  nomeDoFulano == nomeDoBeltrano;
}


// Função que verifica se é maior de idade
imprimir(verificaMaiorIdade(18));
function verificaMaiorIdade (idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}


imprimir(verificaJuros(100,0.1));
function verificaJuros (valorBoleto, percJuros){
    return valorBoleto + (valorBoleto * percJuros);
}


array = [5, 3, 8, 10, 15];

imprimir(mediaAritmetica(array));
function mediaAritmetica (array){
    soma = 0;
    for(i=0; i < array.length; i++){
        soma = soma + array[i];
    }
    return soma / array.length;
}


imprimir (margemBruta(1000000,500000));
function margemBruta(receitaLiquida,custoDeProdutosVendidos){
    lucroBruto = (receitaLiquida - custoDeProdutosVendidos);
    return  (lucroBruto / receitaLiquida) * 100;
}
