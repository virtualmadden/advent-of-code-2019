/* globals describe, test, expect */
'use strict'

const path = require('path')

const file = require('../util/readFile.js')
const { calculateFuelRequirements } = require('../../src/1/rocketFuelEquation.js')

describe('calculateFuelRequirements', () => {
  test('should return the correct sample results', () => {
    expect(calculateFuelRequirements([12])).toBe(2)
    expect(calculateFuelRequirements([14])).toBe(2)
    expect(calculateFuelRequirements([1969])).toBe(654)
    expect(calculateFuelRequirements([100756])).toBe(33583)
  })

  test('should return a result based on the sample inputs', () => {
    const data = file.importFile(path.resolve(__dirname, 'moduleFuelRequirements.txt'))
    expect(calculateFuelRequirements(data)).toBe(3334297)
  })
})
