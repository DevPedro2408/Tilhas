const prompt = require("prompt-sync")()

let time = []
let continuar = true

while(continuar === true) {
    let opcao = Number(prompt("Digite sua opção: 1 (Cadastrar), 2 (Deletar) ou 3 (sair) "))

    if (opcao === 1) {
        let nomejogador = prompt("Digite o nome do usuário (ou 'sair'): ")
        
        time.push(nomejogador) 
        console.log(`Usuário ${nomejogador} foi cadastrado com sucesso!`) 
        console.log(`O seu time atual é: ${time}`)
        console.log("-----------------------")

    } else if (opcao === 2) {

        if (time.length === 0) {
            console.log("Nenhum jogador cadastrado!")
            continue;
        }

        let jogadorDeletado = prompt(`Qual jogador deseja deletar? ${time} `)
        let indiceDeletado = time.findIndex(nomes => {
            return jogadorDeletado.toLocaleLowerCase() === nomes.toLocaleLowerCase()
        })

        if (indiceDeletado === -1)  {
            console.log("Jogador não encontrado.")
            continue;
        }

        time.splice(indiceDeletado, 1)
        console.log("O seu time atual é", time)
        console.log("-----------------------")

    } else if (opcao === 3) {
        continuar = false
    } else {
        console.log("Opção inválida, digite outra opção...")
    }
}