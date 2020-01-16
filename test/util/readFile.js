'use strict'

const fs = require('fs')

const importFile = path => {
  return fs.readFileSync(path, { encoding: 'utf8' }).split('\n')
}

module.exports = {
  importFile
}
