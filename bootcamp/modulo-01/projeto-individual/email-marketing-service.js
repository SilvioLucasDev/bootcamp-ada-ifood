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
    let result = {
        error: false,
        list: []
    }
    for (const client of clientList) {
        const emailBody = createEmailBody(client.name)
        const sendEmailResult = sendEmailAdapter(client.email, EMAIL_SUBJECT, emailBody)
        result.list.push({
            name: client.name,
            email: client.email,
            status: sendEmailResult.status,
            message: sendEmailResult.message
        });
    }
    return result
}

function sendEmailMarketingService() {
    clientList = clientRepository.findClientsVisitedLastMonthAndEmailMarketingTrue()
    if (isMonday() && clientList.length > 0) {
        return sendEmail(clientList)
    } else {
        return { error: true, message: `\n                Nenhum e-mail foi enviado.\n` }
    }
}

module.exports = sendEmailMarketingService