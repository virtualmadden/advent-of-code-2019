'use strict'

const calculateFuelRequirements = data => data.reduce((acc, x) => acc + Math.floor(x / 3) - 2, 0)

module.exports = {
  calculateFuelRequirements
}
