const prompt = require("prompt-sync")()

let time = []
let continuar = true

while(continuar === true) {
    let opcao = Number(prompt("Digite sua opção: 1 (Cadastrar) ou 2 (Deletar)"))

    if (opcao === 1) {
        let nomejogador = prompt("Digite o nome do usuário (ou 'sair'): ") 
        
        if (nomejogador === "sair") {
            continuar = false
        } else {
            time.push(nomejogador) 
            console.log(`Usuário ${nomejogador} foi cadastrado com sucesso!`) 
            console.log(`O seu time atual é: ${time}`)
        }
        
    } else if (opcao === 2) {
        let jogadorDeletado = prompt(`Qual jogador deseja deletar? ${time}`)

        time.findIndex(nomes => {
            
        })
    }
}