const taskService = require('./task-service')

var readlineSync = require('readline-sync')

const index = () => {
    const tasks = taskService.list()
    displayList(tasks)
}

const show = () => {
    const id = +readlineSync.question('\nDigite o ID da tarefa: ')
    const task = taskService.findById(id)
    task === undefined
        ? console.log('\nErro: Tarefa não encontrada\n')
        : console.log(task)
}

const store = () => {
    const description = readlineSync.question('\nPor Favor, digite a descrição da tarefa: ')
    const deadline = readlineSync.question('\nPor Favor, digite o prazo da tarefa: ')
    taskService.save({ description, deadline })
    console.log('\nTarefa criada com sucesso')
    index()
}

const update = () => {
    let description
    let deadline

    const id = +readlineSync.question('\nEscolha a tarefa para editar: ')
    const task = taskService.findById(id)
    if (task === undefined) {
        console.log('\nErro: Tarefa não encontrada')
        return false
    }

    const editOption = +readlineSync.question('\nQual opção gostaria de editar:\n\n1 - Descrição\n2 - Data Limite\n3 - Editar os dois\n\n')
    switch (editOption) {
        case 1:
            description = readlineSync.question('\nDigite a nova descrição da tarefa: ')
            taskService.edit({ editOption, id, description, undefined })
            break
        case 2:
            deadline = readlineSync.question('\nDigite a nova data limite da tarefa: ')
            taskService.edit({ editOption, id, undefined, deadline })
            break
        case 3:
            description = readlineSync.question('\nDigite a nova descrição da tarefa: ')
            deadline = readlineSync.question('\nDigite a nova data limite da tarefa: ')
            taskService.edit({ editOption, id, description, deadline })
            break
        default:
            console.log('\nErro: Opção invalida\n')
            break
    }
    index()
}

const destroy = () => {
    const id = +readlineSync.question('\nDigite o ID que você deseja remover: ')
    const task = taskService.findById(id)
    if (task === undefined) {
        console.log('\nErro: Tarefa não encontrada\n')
        return false
    }
    taskService.remove(id)
    console.log('\nTarefa removida com sucesso\n')
    index()
}

const displayList = (tasks) => {
    console.log('\n--------------------\n| Lista de tarefas |\n--------------------\n')
    console.log(tasks)
}

const main = () => {
    let welcome = true
    let message
    let option

    do {
        if (welcome) {
            message = '\n-----------------------------------\n| Bem Vindo a sua lista de tarefas |\n-----------------------------------\n'
            welcome = false
        } else {
            message = '\n---------------------------------------\n| Escola outra opção para continuar |\n---------------------------------------\n'
        }
        option = +readlineSync.question(
            message + 'Para prosseguir, escolha uma das opções abaixo:\n\n1 - Listar todas as tarefas\n2 - Obter tarefa através do ID\n3 - Adicionar Tarefa\n4 - Editar Tarefa\n5 - Remover Tarefa\n0 - Sair do sistema\n\n'
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
                console.log('\nOpção invalida\n')
        }
    } while (option != 0)
}
main()
