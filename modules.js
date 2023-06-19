// Modules- Encapsulated code(only share minimum)
// CommoJS every file is module by default

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade')

// console.log(data)

// console.log(names)

sayHi('ruth')
sayHi(names.john)
sayHi(names.peter)