const square = function(x){
    return x * x
}

const squareusingarrow = (x) => {
    return x * x
}

const squareusingarrow2 = (x) => x * x

console.log(square(3))
console.log(squareusingarrow(5))
console.log(squareusingarrow2(7))


const event = {
    name: 'Birthday party',
    printguestList: function(){
        console.log('This is the list of guest for the event '+ this.name)
    }
}

// arrow functions dont bind their own object values

const event2 = {
    name: 'farewell party',
    printguestList:() => {
        console.log('This is the list of guest for the event '+ this.name)
    }
}

const event3 = {
    name: 'Convocation party',
    printguestList: () => console.log('This is the list of guest for the event '+ this.name)
}


// arrow functions dont bind their own object values solved with ES6 method

const event4 = {
    name: 'Newbie party',
    guestList: ['Harsh','Gupta'],
    printguestList(){
        console.log('This is the list of guest for the event '+ this.name)
        this.guestList.forEach(function(guest){
            console.log(guest + ' is attending '+ this.name)
        })
    }
}


// event.printguestList()
// event2.printguestList()
// event3.printguestList()
event4.printguestList()