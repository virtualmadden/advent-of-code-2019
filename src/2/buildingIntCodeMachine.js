'use strict'

const calculateFuelRequirements = data => {
  let complete = false
  let index = 0

  do {
    let operation = data[index]
    let left = data[index + 1]
    let right = data[index + 2]
    let result = data[index + 3]

    switch (operation) {
      case 1:
        data[result] = data[left] + data[right]
        break
      case 2:
        data[result] = data[left] * data[right]
        break
      case 99:
        complete = true
        break
    }

    index += 4
  } while (!complete || index < data.length)

  return data
}

module.exports = {
  calculateFuelRequirements
}
