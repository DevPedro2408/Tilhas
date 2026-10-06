const prompt = require("prompt-sync")()


let nomedafruta = []
sair = true

while (sair = true) {
    
    fruta = prompt("quais frutas voce quer adicionar na lista ou sair ")

    if (nomedafruta = "sair") {
        nomedafruta.push(fruta)
        
        sair = false
        console.log("voce saiu da lista")

    } else {
        console.log(nomedafruta, "foi adicionada")
    }
}
    
