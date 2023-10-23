const sendEmailMarketingService = require('./email-marketing-service')

function displayResult(result) {
    console.log(`
                --------------------------------
                | RESULTADO DO ENVIO DE E-MAILS |
                --------------------------------
    `)
    if (!result.error) {
        for (const item of result.list) {
            console.log(`
                Cliente: ${item.name}
                Email: ${item.email}
                Status: ${item.status}
                Mensagem: ${item.message}
            `)
        }
    } else {
        console.log(result.message);
    }
}

function main() {
    result = sendEmailMarketingService()
    displayResult(result)
}
main()
