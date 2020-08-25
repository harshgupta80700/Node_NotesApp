const fs = require('fs')

const getNotesFunction = function(){
    return "Your notes..."
}

const addNote = function(title , body){
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const loadNotes = function(){
    try{
        DataBuffer = fs.readFileSync('notes.json')
        const JSONdata = DataBuffer.toString()
        return JSON.parse(JSONdata)
    }catch(e){
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    getNotesFunction: getNotesFunction,
    addNote: addNote
}