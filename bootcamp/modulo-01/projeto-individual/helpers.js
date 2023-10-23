function isMonday() {
    const today = new Date()
    return today.getDay() === 1
}

module.exports = isMonday;