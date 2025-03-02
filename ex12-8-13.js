// One
activateHyperdrive = () => console.log("Hyperdrive activated!")
activateHyperdrive()

// Two
scanForLife = () => console.log("No lifeforms detected")
scanForLife()

// Three
currentCoordinates = (x, y, z ) => ({
    x : x,
    y : y,
    z : z
})

const coor = currentCoordinates(10,2,11);
console.log(coor.x, coor.y, coor.z)

//Four
const spacecraft = {
    character: 'Atom Splitter',
    receiveMessage: (msg) => 
        console.log(`Message for ${this.character}: ${msg} `)
    ,
    receiveMessage2: function message (msg) {
        console.log(`Message for ${this.character}: ${msg} `)
    }
}

console.log(spacecraft.receiveMessage("We need more bluecheese!"))
console.log(spacecraft.receiveMessage2("We need more physics teachers"))

