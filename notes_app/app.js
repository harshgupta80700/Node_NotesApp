// const fs = require('fs')

// fs.writeFileSync('notes.txt',"This is the changed content")

// fs.appendFileSync('notes.txt'," This is the appended content") 

// fs.appendFileSync('test.txt',"This is the test content first part\n")

// fs.appendFileSync('test.txt',"This is the test content second part\n")

// const data = fs.readFileSync('test.txt',{encoding:'utf8', flag:'r'})
// console.log(data.length)


// const add = require('./utils')
// const sub = require('./subtract')

// const sum = add(2,8)
// const diff = sub(10,5)

// console.log(add(2,4))
// console.log(sub(2,10))

// console.log(sum)
// console.log(diff)

// console.log(getNotes())

// console.log(getnotesstring)

// const validator = require('validator')

// console.log(validator.isEmail('harsh@exampe.com'))
// console.log(validator.isURL('https:/google.com'))

// const chalk = require('chalk')

// console.log(chalk.blue('Hello World'))
// console.log(chalk.green.bgMagenta.bold(validator.isEmail("harsh@e.com")))
// console.log(chalk.blue("Hello") + chalk.green("World") + chalk.red("!"))
// console.log(chalk.red("Hello", chalk.blue.bgYellow.underline("World")))
// console.log(chalk.red("Hello", chalk.blue.bgGreen.inverse("World")))
// console.log(chalk.bold("hello"))
// console.log(chalk.inverse("hello"))

// console.log(process.argv)
// console.log(process.argv[2])

const notes = require('./notes')
const yargs = require('yargs')
const { describe, demandOption } = require('yargs')
//const { describe } = require('yargs')

//const getnotesstring = getNotes()

const commandlineargument = process.argv[2]

yargs.version('1.1.0')


// console.log(process.argv)
// console.log(yargs.argv)

// console.log(commandlineargument)

// if(commandlineargument === 'addnote'){
//     console.log('adding note')
// }else if(commandlineargument === 'removenote'){
//     console.log('removing note')
// }

//console.log('hello')

//console.log(yargs.argv)


yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removenote(argv.title)
    }
})

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        // console.log('New note added\n'+'Title: '+argv.title+'\nBody: '+argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readnote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List out the notes',
    handler() {
        notes.listnote()
    }
})

yargs.parse()

//console.log(yargs.argv)