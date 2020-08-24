const fs = require('fs')

fs.writeFileSync('notes.txt',"This is the changed content")

fs.appendFileSync('notes.txt'," This is the appended content") 

fs.appendFileSync('test.txt',"This is the test content first part ")

fs.appendFileSync('test.txt',"This is the test content second part")

const data = fs.readFileSync('test.txt',{encoding:'utf8', flag:'r'})
console.log(data)

const add = require('./utils')
const sub = require('./subtract')

const sum = add(2,8)
const diff = sub(10,5)


console.log(sum)
console.log(diff)

const getNotes = require('./notes')

const getnotesstring = getNotes()

console.log(getnotesstring)