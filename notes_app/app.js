// const fs = require('fs')

// fs.writeFileSync('notes.txt',"This is the changed content")

// fs.appendFileSync('notes.txt'," This is the appended content") 

// fs.appendFileSync('test.txt',"This is the test content first part\n")

// fs.appendFileSync('test.txt',"This is the test content second part\n")

// const data = fs.readFileSync('test.txt',{encoding:'utf8', flag:'r'})
// console.log(data.length)


const add = require('./utils')
const sub = require('./subtract')

const sum = add(2,8)
const diff = sub(10,5)

console.log(add(2,4))
console.log(sub(2,10))

console.log(sum)
console.log(diff)

const getNotes = require('./notes')

const getnotesstring = getNotes()

console.log(getNotes())

console.log(getnotesstring)

const validator = require('validator')

console.log(validator.isEmail('harsh@exampe.com'))
console.log(validator.isURL('https:/google.com'))

const chalk = require('chalk')

console.log(chalk.blue('Hello World'))
console.log(chalk.green.bgMagenta.bold(validator.isEmail("harsh@e.com")))
console.log(chalk.blue("Hello") + chalk.green("World") + chalk.red("!"))
console.log(chalk.red("Hello", chalk.blue.bgYellow.underline("World")))
console.log(chalk.red("Hello", chalk.blue.bgGreen.inverse("World")))
console.log(chalk.bold("hello"))
console.log(chalk.inverse("hello"))

console.log(process.argv)
console.log(process.argv[2])