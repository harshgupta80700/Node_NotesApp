const fs = require('fs')

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const bookJSON = JSON.stringify(book)

// console.log(bookJSON)


// const parsedData = JSON.parse(bookJSON)

// console.log(parsedData)
// console.log(parsedData.title)
// console.log(parsedData.author)

//fs.writeFileSync('1-json.json',bookJSON)

const DataBuffer = fs.readFileSync('1-json.json')
console.log(DataBuffer.toString())
