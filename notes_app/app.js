const fs = require('fs')

fs.writeFileSync('notes.txt',"This is the changed content")

fs.appendFileSync('notes.txt'," This is the appended content") 