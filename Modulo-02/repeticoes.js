const prompt = require("prompt-sync")()

let continuar = true

while(continuar === true) {
    let nomeUsuario = prompt("Digite o nome do usuário (ou 'sair'): ") 

    if (nomeUsuario === "sair") {
        continuar = false
    } else {
        console.log(`Usuário ${nomeUsuario} foi cadastrado com sucesso!`)
    }
}