import gameManager from "./gameManager.js"

const seedrandom = require('seedrandom')
var startOfDay = require('date-fns/startOfDay')
let seededRandom
if (gameManager.currentGame.seedState == null) {
  seededRandom = seedrandom(startOfDay(new Date()), { state: true })
} else {
  seededRandom = seedrandom("", { state: gameManager.currentGame.seedState })
}

export default seededRandom