colaboradores    = ['Cintia', 'Rodrigo', 'Ademir', 'Liliane', 'Fernanda', 'Lotario', 'Bernadete', 'Jones']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      25,          30,           29,      26,         31,          24,         26,         29];

/* Função para verificar se um colaborador está apto para se aposentar, atendendo a pelo menos uma das seguintes regras:
 * - Ter pelo menos 65 anos de idade;
 * - Ter trabalhado no mínimo 30 anos;
 * - Ter pelo menos 60 anos de idade e 25 anos de trabalho.
 */

function verificarAposentadoria (colaborador) {
    colaborador = false
    idade = 0
    tempoTrabalho = 0


    // buscando um colaborador pelo nome//
    for (i = 0; i < colaboradores.length; i++) {
        if(nome == colaboradores[i]) {
            colaborador = true
            idade = idades[i]
            tempoTrabalho = temposDeTrabalho[i]
        }
    }
// se encontrar o colaborador, verifica as regras de aposentadoria//

if (colaborador) {
        
    porIdade = (idade >= 65)
    porTempoDeTrabalho = (tempoTrabalho >= 30)
    porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

    // não importa qual regra seja atendida
    // se qualquer uma for, o colaborador pode se aposentar
    if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
        console.log("Parabéns, já pode sair de férias eternas :)")
    } else {
        console.log("Infelizmente, ainda falta um tempo :(")
    }

} else {
    console.log("Colaborador inválido :|")
    }
}