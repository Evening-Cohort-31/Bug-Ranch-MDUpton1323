const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    // drovers is an empty array that we are creating to store hireDrovers
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
}

module.exports = { hireDrovers }