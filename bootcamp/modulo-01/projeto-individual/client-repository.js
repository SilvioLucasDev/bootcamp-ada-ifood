const clientsDb = require('./clients-db')

function findClientsVisitedLastMonthAndEmailMarketingTrue() {
    const lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 1)

    return clientsDb.filter((client) => {
        if ((client.visited_at >= lastMonth) && client.email_marketing) {
            return true
        }
        return false
    })
}

module.exports = { findClientsVisitedLastMonthAndEmailMarketingTrue }