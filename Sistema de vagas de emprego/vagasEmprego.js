function exibirMenu() {
    return prompt(
        "Olá, bem-vindo(a) ao Sistema de Vagas de Emprego!\n\n" +
        "Escolha a opção desejada:\n\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ''
}
let vagas = []

function listarVagas() {
    let message = ''
    if (vagas.length > 0) {
        vagas.map(function (item, index) {
            message += 'Vaga ' + (index + 1) + '\nNome da vaga: ' + item.nome + '\nQuantidade de inscritos: ' + item.inscritos + '\n\n'
        })
    } else {
        message = "Não existem vagas disponíveis!"
    }
    alert(message)
}

function criarVaga() {
    let nome = prompt('Qual o nome da vaga?')
    let descricao = prompt('Qual a descrição da vaga?')
    let dataLimite = prompt('Qual a data limite para inscrição?')
    const confirmar = confirm("Nome da vaga: " + nome + "\nDescrição da vaga: " + descricao + "\nData Limite da vaga: " + dataLimite + "\nRealmente deseja salvar essa vaga?")
    if (confirmar) {
        vagas.push({ nome, descricao, dataLimite, inscritos: 0, nomeCandidatos: [] })
        alert('Vaga criada com sucesso!')
    }
    else {
        alert('A vaga não foi criada!')
    }
}

function visualizarVaga() {
    let qualIndice = prompt('Qual o índice da vaga que deseja visualizar:')
    let message = ''
    if (qualIndice - 1 >= 0 && qualIndice - 1 < vagas.length) {

        const nomeDosCandidatos = vagas[qualIndice - 1].nomeCandidatos.join(', ')

        message = "Vaga " + qualIndice + "\nNome da vaga: " + vagas[qualIndice - 1].nome + '\nDescrição da vaga: ' + vagas[qualIndice - 1].descricao + '\nData limite da vaga: ' + vagas[qualIndice - 1].dataLimite + '\nQuantidades de candidados inscritos: ' + vagas[qualIndice - 1].inscritos + '\nNome dos inscritos: ' + nomeDosCandidatos
    } else {
        message = "Não existem vagas disponíveis!"
    }
    alert(message)
}

function increverUmCandidato() {
    let qualIndiceVaga = prompt('Qual o índice da vaga que deseja se cadastrar?')
    if (qualIndiceVaga - 1 >= 0 && qualIndiceVaga - 1 < vagas.length) {
        let nomeCandidato = prompt('Qual o nome do candidato?')
        const confirmar = confirm('Vaga: ' + qualIndiceVaga + '\nNome da vaga: ' + vagas[qualIndiceVaga - 1].nome + '\nDescrição da vaga: ' + vagas[qualIndiceVaga - 1].descricao) + '\nData limite para inscrição: ' + vagas[qualIndiceVaga - 1].dataLimite + '\nTem certeza que deseja se cadastrar nessa vaga?'

        if (confirmar) {
            vagas[qualIndiceVaga - 1].nomeCandidatos.push(nomeCandidato)
            vagas[qualIndiceVaga - 1].inscritos = vagas[qualIndiceVaga - 1].inscritos + 1
            alert("Usuário inscrito na vaga com sucesso!")
        }
        else if (!confirmar) {
            alert("Usuário não cadastrado!")
        }
    } else {
        alert('Essa vaga é inexistente')
    }

}

function excluirVaga() {
    let qualIndiceVaga = prompt('Qual índice da vaga que deseja excluir?')
    const confirmar = confirm('Vaga: ' + qualIndiceVaga + '\nNome da vaga: ' + vagas[qualIndiceVaga - 1].nome + '\nDescrição da vaga: ' + vagas[qualIndiceVaga - 1].descricao) + '\nData limite para inscrição: ' + vagas[qualIndiceVaga - 1].dataLimite + '\nTem certeza que deseja excluir essa vaga?'

    if (confirmar && qualIndiceVaga - 1 >= 0 && qualIndiceVaga -1 < vagas.length) {
        vagas.splice(qualIndiceVaga - 1, 1)
        alert("Vaga excluída com sucesso!")
    }
    else if (!confirmar) {
        alert("A vaga não foi excluida!")
    }
    else {
        alert("Essa vaga não existe!")
    }
}

do {
    opcao = exibirMenu()

    switch (opcao) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            increverUmCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
            break
    }

    executar()

} while (opcao != 6)


