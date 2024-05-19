let imoveisCadastrados = []
let opcao 

do {
     opcao = prompt('Quantidade de imóveis cadastrados: ' + imoveisCadastrados.length + '\n\nEscolha a opção deseja:\n1-Cadastrar um novo imóvel.\n2-Consultar as informações dos imóveis cadastrados.\n3-Sair.')

    if (opcao == 1) {
        const nomeDono = prompt('Qual o nome do proprietário?')
        const qtdQuartos = prompt('Quantidade de quartos do imóvel?')
        const qtdBanheiros = prompt('Quantidade de banheiros do imóvel?')
        const garagem = prompt('O imóvel possui garagem?')
        imoveisCadastrados.push({nomeDono, qtdQuartos, qtdBanheiros, garagem})
        alert('Imóvel cadastrado com sucesso!')
    }
    else if (opcao == 2) {
        if (imoveisCadastrados.length === 0) {
            alert('Não há imóveis cadastrados!')      
        } else {
            let message = ''
            for (let i = 0; i < imoveisCadastrados.length; i++) { message += 'Imóvel ' + (i+1) + '\nNome do Proprietário: ' + imoveisCadastrados[i].nomeDono + '.\nQuantidade de quartos: ' + imoveisCadastrados[i].qtdQuartos + '.\nQuantidade de banheiros: ' + imoveisCadastrados[i].qtdBanheiros + '.\nPossui garagem? ' + imoveisCadastrados[i].garagem + '.\n\n'
            }
            alert(message)
        }
    }

    else if (opcao == 3){
        alert('Saindo...')
    }
    else {
        alert('Opção inválida')
    }
} while (opcao != 3)
