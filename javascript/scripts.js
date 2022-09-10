let nomeCompleto = "cintia traesel";
let apelido = "cissa";
let idade  = 26;
let dataNascimento = "15/07/1996";
let localNascimento = "Dois Irmãos";
let altura = 1.64;
let trabalhando = true;
let apresentacao = "Meu nome é " + nomeCompleto + 
                   " (sou conhecido[a] como " +
                     apelido + ") e tenho " +
                     idade + " anos. Nasci no dia " +
                     dataNascimento + ", na cidade de " +
                     localNascimento + ". Tenho " +
                     altura + "m de altura e atualmente estou " +
                     (trabalhando ? "empregada" : "desempregado") + "."
console.log(apresentacao);