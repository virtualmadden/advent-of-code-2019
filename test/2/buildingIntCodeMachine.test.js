/* globals describe, test, expect */
'use strict'

const path = require('path')

const file = require('../util/readFile.js')
const {
  calculateFuelRequirements
} = require('../../src/2/buildingIntCodeMachine.js')

describe('calculateFuelRequirements', () => {
  test('should return the correct sample results', () => {
    expect(calculateFuelRequirements([1, 0, 0, 0, 99])).toStrictEqual([
      2,
      0,
      0,
      0,
      99
    ])
    expect(calculateFuelRequirements([2, 3, 0, 3, 99])).toStrictEqual([
      2,
      3,
      0,
      6,
      99
    ])
    expect(calculateFuelRequirements([2, 4, 4, 5, 99, 0])).toStrictEqual([
      2,
      4,
      4,
      5,
      99,
      9801
    ])
    expect(
      calculateFuelRequirements([1, 1, 1, 4, 99, 5, 6, 0, 99])
    ).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
  })

  test('should return a result based on the sample inputs', () => {
    const data = file.importFile(path.resolve(__dirname, 'intCodeInput.txt'))

    data[1] = 12
    data[2] = 2

    let result = calculateFuelRequirements(data)

    expect(result[0]).toBe(4576384)
  })
})
