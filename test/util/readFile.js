'use strict'

const fs = require('fs')

const importFile = path => {
  return fs
    .readFileSync(path, { encoding: 'utf8' })
    .split(/[\n,]/)
    .map(x => parseInt(x))
}

module.exports = {
  importFile
}
