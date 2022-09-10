timesDeFutebol = ["Grêmio", "Inter", "Juventude", "Palmeiras", "fluminense"]
index = 0

while (index < timesDeFutebol.length) {
    console.log(timesDeFutebol[index])
    index++
}

valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

soma = 0
for (index = 0; index < valores.length; index++) {
    soma += valores[index]
}

media = soma / valores.length
console.log(media)

meuNome = ""
nomeComum = "false"

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for (index = 0; index < nomesComuns.length; index++) {
    if (meuNome == nomesComuns[index]) {
        nomeComum = true
        break
    }
}

if (nomeComum) {
    console.log("É, nome comum :P")
} else {
    console.log("Diferentão, hein? XD")
}