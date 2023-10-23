const isMonday = require('./helpers')
const clientRepository = require('./client-repository')
const sendEmailAdapter = require('./envia-email')

const EMAIL_SUBJECT = 'Novidades da CarStore'

function createEmailBody(clientName) {
    return `
        Olá ${clientName},

        Temos o prazer de informar que a CarStore está trazendo novos veículos e oferecendo promoções especiais somente para esta semana.

        - Confira nossos novos modelos, os mais novos disponíveis no mercado: (Link)[car-store.com.br/cars/new]
        - E os carros mais vendidos dos últimos meses: (Link)[car-store.com.br/cars/top-sales]
        
        Condições especiais para aquisição:
        - Ofertas especiais de financiamento.
        - Valorização do seu carro antigo na troca.
        - Seguro grátis no primeiro ano.
        - Garantia estendida para a sua tranquilidade.
        
        Não perca a oportunidade de conhecer os veículos dos seus sonhos. Visite nosso site ou a concessionária hoje mesmo para fazer um test drive!

        Av. Brig. Faria Lima, 1306 - Pinheiros, São Paulo - SP, 01451-001 | (Link)[car-store.com.br]

        Atenciosamente,
        Equipe CarStore
    `;
}

function sendEmail(clientList) {
    let resultEmailList = []
    for (const client of clientList) {
        const emailBody = createEmailBody(client.name)
        const result = sendEmailAdapter(client.email, EMAIL_SUBJECT, emailBody)
        resultEmailList.push({
            name: client.name,
            email: client.email,
            status: result.status,
            message: result.message
        });
    }
    return resultEmailList
}

function displayResult(resultEmailList) {
    console.log(`
            --------------------------------
            | RESULTADO DO ENVIO DE E-MAILS |
            --------------------------------
        `)
    for (const result of resultEmailList) {
        console.log(`
            Cliente: ${result.name}
            Email: ${result.email}
            Status: ${result.status}
            Mensagem: ${result.message}
        `)
    }
}

function sendEmailMarketingService() {
    clientList = clientRepository.findClientsVisitedLastMonthAndEmailMarketingTrue()
    if (isMonday() && clientList.length > 0) {
        resultEmailList = sendEmail(clientList)
        displayResult(resultEmailList)
    } else {
        console.log(`\nErro: Nenhum e-mail foi enviado.\n`);
    }
}
sendEmailMarketingService()
