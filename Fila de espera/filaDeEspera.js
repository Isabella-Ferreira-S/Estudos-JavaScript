let paciente = ['João', 'Matheus', 'Lucas', 'Guilherme', 'Arthur']
let lista = ''
for (let i = 0; i < paciente.length; i++) {
    lista += (i + 1) + 'º ' + paciente[i] + '\n'
}
alert('Olá! O consultório está com os seguintes pacientes aguardando atendimento: \n' + lista)
let menu = prompt("O que deseja fazer:\n1- Adicionar paciente\n2- Consultar paciente\n3- Sair")

while (menu != 3) {

    if (menu == 1) {
        const novoPaciente = prompt('Qual o nome do paciente que deseja adicionar?')
        paciente.push(novoPaciente)
        alert('Paciente ' + novoPaciente + ' adicionado ao final da fila!')
    } else if (menu == 2) {
        const removido = paciente.shift()
        alert(removido + ' foi atendido e removido da fila!')
    } else {
        alert('Opção não encontrada')
    }


    lista = ''

    for (let i = 0; i < paciente.length; i++) {
        lista += (i + 1) + 'º ' + paciente[i] + '\n'
    }

    alert('Olá! O consultório está com os seguintes pacientes aguardando atendimento:\n' + lista)
    menu = prompt("O que deseja fazer:\n1- Adicionar paciente\n2- Consultar paciente\n3- Sair")
}


