const { database } = require("./database.js")
// 
const roundup = (herdSize) => {
    const cattle = []
    // Is an empty array that we are creating to store what is needed for roundup
    const types = database.cattleTypes
// loops through the herdSize array
    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }