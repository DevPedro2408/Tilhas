const prompt = require("prompt-sync")()

let time = []
let continuar = true

function mostrarMenu() {
    console.log("-----------------------")
    console.log("1 - Cadastrar")
    console.log("2 - Deletar")
    console.log("3 - Mostrar Equipe")
    console.log("4 - Sair")
    console.log("\n")
}

function mostrarTime()  {
    console.log("-----------------------")
    console.log("Meu time atual é", time)
    console.log("-----------------------")
}

function cadastrarJogador() {
    let nomejogador = prompt("Digite o nome do jogador: ")
        
    time.push(nomejogador) 
    console.log(`Usuário ${nomejogador} foi cadastrado com sucesso!`) 
    console.log("-----------------------")
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado!")
        return;
    }

    let jogadorDeletado = prompt(`Qual jogador deseja deletar? ${time} `)
    let indiceDeletado = time.findIndex(nomes => {
        return jogadorDeletado.toLocaleLowerCase() === nomes.toLocaleLowerCase()
    })

    if (indiceDeletado === -1)  {
        console.log("Jogador não encontrado.")
        return;
    }

    time.splice(indiceDeletado, 1)
    console.log(`Jogador ${jogadorDeletado} deletado com sucesso.`)
    console.log("-----------------------")
}

while(continuar === true) {
    mostrarMenu()
    let opcao = Number(prompt("Digite sua opção:"))

    if (opcao === 1) {
        cadastrarJogador()
    } else if (opcao === 2) {
        deletarJogador()
    } else if (opcao === 3) {
        mostrarTime()
    } else if (opcao === 4){
        continuar = false
    } 
    else {
        console.log("Opção inválida, digite outra opção...")
    }
}