const prompt = require("prompt-sync")()

let time = []
let continuar = true

function mostrarMenu() {
    console.log("\n=======================")
    console.log("------ SISTEMA DE GAMERS ------")
    console.log("1 - Cadastrar")
    console.log("2 - Deletar")
    console.log("3 - Mostrar Equipe")
    console.log("4 - Calculo da Média da Equipe")
    console.log("5 - Buscar Jogador")
    console.log("6 - Atualizar Pontos")
    console.log("7 - Sair")
}

function cadastrarJogador() {
    let nomejogador = prompt("Digite o nome do jogador: ")
    let funcaoNotime = prompt("Digite a função no time: ")
    let pontuacaoDoTime = Number(prompt("Digite a pontuação: "))

    if (isNaN(pontuacaoDoTime)) {
        console.log("Pontuação Inválida!!")
    } else {
        time.push({nome: nomejogador, funcao: funcaoNotime, pontuacao: pontuacaoDoTime})
        console.log(`Jogador ${nomejogador} foi cadastrado com sucesso!`)
        console.log("-----------------------")
    }

}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado!")
        return;
    }
    
    let jogadorDeletado = prompt(`Qual jogador deseja deletar? ${time} `)
    let indiceDeletado = time.findIndex(nomes => {
        return jogadorDeletado.toLocaleLowerCase() === nomes.nome.toLocaleLowerCase()
    })
    
    if (indiceDeletado === -1)  {
        console.log("Jogador não encontrado.")
        return;
    }
    
    time.splice(indiceDeletado, 1)
    console.log(`Jogador ${jogadorDeletado} deletado com sucesso.`)
    console.log("-----------------------")
}

function mostrarTime()  {
    let i = 1
    time.forEach(jogadores => {
        console.log(`${i++}. ${jogadores.nome} | Função: ${jogadores.funcao} | Pontuação: ${jogadores.pontuacao}`)
    })               
}

function calculoDaMedia() {
    let somaDaPontuacao = time.reduce((acc, valor) => {
        return acc += valor.pontuacao
    }, 0)

    let media = somaDaPontuacao/time.length

    console.log("A média do time é: ", media.toFixed(2))
}

function buscarJogador() {
    let nomeDesejado = prompt("Digite o nome desejado: ")

    let indiceNomeDesejado = time.findIndex(name => {
        return nomeDesejado.toLocaleLowerCase() === name.nome.toLocaleLowerCase()
    })

    if (indiceNomeDesejado === -1) {
        console.log(`O jogador ${nomeDesejado} não faz parte da nossa equipe!!`)
    } else {
        console.log("JOGADOR ENCONTRADO")
        console.log(`Nome: ${time[indiceNomeDesejado].nome} | Pontos: ${time[indiceNomeDesejado].pontuacao}`)
    }
}

function atualizarPontos() {
    let nomeAtualizar = prompt("Qual o nome do jogador que você quer atualizar?")

    let indiceAtualizar = time.findIndex(elementAtualizar => {
        return nomeAtualizar.toLocaleLowerCase() === elementAtualizar.nome.toLocaleLowerCase()
    })

    if (indiceAtualizar === -1) {
        console.log(`O jogador ${nomeAtualizar} não faz parte da nossa equipe!!`)
    } else {
        let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "))
        time[indiceAtualizar].pontuacao += pontosNovos

        console.log(`SUCESSO! A pontuação de ${time[indiceAtualizar].nome} subiu para ${time[indiceAtualizar].pontuacao}`)
    }
}

while(continuar === true) {
    mostrarMenu()
    let opcao = Number(prompt("Digite sua opção: "))

    if (opcao === 1) {
        cadastrarJogador()
    } else if (opcao === 2) {
        deletarJogador()
    } else if (opcao === 3) {
        mostrarTime()
    } else if (opcao === 4){
        calculoDaMedia()
    } else if (opcao === 5){
        buscarJogador()
    } else if (opcao === 6) {
        atualizarPontos()
    } else if (opcao === 7) {
        continuar = false
    }
    else {
        console.log("Opção inválida, digite outra opção...")
    }
}