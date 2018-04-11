const browserslist = require('browserslist')
const util = require('util')

const config = require('./index')

console.log(util.inspect(browserslist(config), { maxArrayLength: null  }))

