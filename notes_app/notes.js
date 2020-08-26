const fs = require('fs')
const { title } = require('process')

const getNotesFunction = function(){
    return "Your notes..."
}

const addNote = function(title , body){
    const notes = loadNotes()
    const dublicatedata = notes.filter(function(note){
        return note.title === title
    })

    if (dublicatedata.length === 0) {

        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log('New Note Added')

    } else {
        console.log('Note title Taken!')
    
    }

    
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


const removenote = function(title){
    const notes = loadNotes()
    //console.log(notes)
    const dublicatedata = notes.filter(function(note){
        return !(note.title === title)
    })
    //console.log(dublicatedata)

    if(dublicatedata.length === notes.length){
        console.log('Note with this title doesn\'t exist')
    }else{
        const dataJSON = JSON.stringify(dublicatedata)
        fs.writeFileSync('notes.json',dataJSON)
    }

}



module.exports = {
    getNotesFunction: getNotesFunction,
    addNote: addNote,
    removenote: removenote
}