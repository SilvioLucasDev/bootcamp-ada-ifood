const taskRepository = require('./task-repository')
var readlineSync = require('readline-sync')

function index() {
    const tasks = taskRepository.list()
    console.log('\n--------------------\n| Lista de tarefas |\n--------------------\n')
    console.log(tasks)
}

function show() {
    const id = +readlineSync.question('\nDigite o ID da tarefa: ')
    const task = taskRepository.findById(id)
    task === undefined
        ? console.log('\nErro: Tarefa nao encontrada\n')
        : console.log(task)
}

function store() {
    const description = readlineSync.question('\nPor Favor, digite a descricao da tarefa: ')
    const deadline = readlineSync.question('\nPor Favor, digite o prazo da tarefa: ')
    taskRepository.save({ description, deadline })
    console.log('\nTarefa criada com sucesso')
    index()
}

function update() {
    let description
    let deadline

    const id = +readlineSync.question('\nEscolha a tarefa para editar: ')
    const task = taskRepository.findById(id)
    if (task === undefined) {
        console.log('\nErro: Tarefa nao encontrada')
        return false
    }

    const editOption = +readlineSync.question('\nQual opcao gostaria de editar:\n\n1 - Descricao\n2 - Data Limite\n3 - Editar os dois\n\n')
    switch (editOption) {
        case 1:
            description = readlineSync.question('\nDigite a nova descricao da tarefa: ')
            taskRepository.edit({ editOption, id, description, undefined })
            break
        case 2:
            deadline = readlineSync.question('\nDigite a nova data limite da tarefa: ')
            taskRepository.edit({ editOption, id, undefined, deadline })
            break
        case 3:
            description = readlineSync.question('\nDigite a nova descricao da tarefa: ')
            deadline = readlineSync.question('\nDigite a nova data limite da tarefa: ')
            taskRepository.edit({ editOption, id, description, deadline })
            break
        default:
            console.log('\nErro: Opcao invalida\n')
            break
    }
    index()
}

function destroy() {
    const id = +readlineSync.question('\nDigite o ID da tarefa que voce deseja remover: ')
    const task = taskRepository.findById(id)
    if (task === undefined) {
        console.log('\nErro: Tarefa nao encontrada\n')
        return false
    }
    taskRepository.remove(id)
    console.log('\nTarefa removida com sucesso\n')
    index()
}

function main() {
    let welcome = true
    let message
    let option

    do {
        if (welcome) {
            welcome = false
            message = '\n------------------------------------\n| Bem Vindo a sua lista de tarefas |\n------------------------------------\n\nPara prosseguir, escolha uma das opcoes abaixo:\n'
        } else {
            message = '\nEscola outra opcao para continuar:\n'
        }

        option = +readlineSync.question(
            message + '\n1 - Listar todas as tarefas\n2 - Obter tarefa atraves do ID\n3 - Adicionar Tarefa\n4 - Editar Tarefa\n5 - Remover Tarefa\n0 - Sair do sistema\n\n'
        )

        switch (option) {
            case 1:
                index()
                break
            case 2:
                show()
                break
            case 3:
                store()
                break
            case 4:
                update()
                break
            case 5:
                destroy()
                break
            case 0:
                console.log('\nSaindo do sistema\n')
                break
            default:
                console.log('\nOpcao invalida\n')
        }
    } while (option != 0)
}
main()
