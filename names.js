// Modules- Encapsulated code(only share minimum)
// CommoJS every file is module by default
// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'
// const sayHi = (name) => {
//     console.log('Hello there ${name}')
// }

// sayHi('ruth')
// sayHi(john)
// sayHi(peter)
// local
const secret = 'SUPER SECRET'

// share
const john = 'john'
const peter = 'peter'

// console.log(module)
module.exports = {john,peter}