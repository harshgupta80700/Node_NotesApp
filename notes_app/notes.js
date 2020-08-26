const fs = require('fs')
const chalk = require('chalk')

const { title } = require('process')
const { bold } = require('chalk')

const getNotesFunction = () => "Your notes..."

const addNote = (title , body) => {
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title === title)
    const findnotetitle = notes.find((note)=>note.title === title)

    if (!findnotetitle) {
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log(chalk.bgGreen.bold('New Note Added'))

    } else {
        console.log(chalk.bgRed.bold('Note title Taken!'))
    
    }

    
}

const loadNotes = () =>{
    try{
        DataBuffer = fs.readFileSync('notes.json')
        const JSONdata = DataBuffer.toString()
        //console.log(JSON.parse(JSONdata))
        return JSON.parse(JSONdata)
    }catch(e){
        return []
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const removenote = (title) => {
    const notes = loadNotes()
    //console.log(notes)
    const notestokeep = notes.filter((note) => !(note.title === title))
    //console.log(notestokeep)

    if(notestokeep.length === notes.length){
        console.log(chalk.bgRed.bold('Note with this title doesn\'t exist'))
    }else{
        saveNotes(notestokeep)
        console.log(chalk.bgGreen.bold('Note Deleted'))
    }

}

const listnote = ()=>{
    const notes = loadNotes()
    //console.log(notes)
    if (notes.length === 0) {
        console.log('No note found')
    }else{
        console.log(chalk.yellow.inverse.bold('Your Notes:'))
        notes.forEach(element => {
            console.log(element.title)
        });
    }
}

const readnote = (title)=>{
    const notes = loadNotes()
    const notetoread = notes.find((note)=>note.title===title)
    if(notetoread){
        console.log(chalk.green.inverse(notetoread.body))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}



module.exports = {
    getNotesFunction: getNotesFunction,
    addNote: addNote,
    removenote: removenote,
    listnote: listnote,
    readnote: readnote
}