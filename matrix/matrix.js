let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
let cellSize = 20 // cell size for each character
canvas.height = screen.height - 90
let maxHeight = Math.ceil(canvas.height / cellSize) // max number of cells in column
let fadingSpeed = 0.05
let columns = []

init = () => { // this function starts right after page load
    initMatrix()
    action()
    console.log("Your screen resolution is: " + screen.width + "x" + screen.height)
}

// what to do after page has loaded
document.addEventListener("DOMContentLoaded", init)

initMatrix = () => {
    // divide canvas into columns
    canvas.width = screen.width
    for (let i = 0; i < canvas.width / cellSize; i++) {
        let column = {}
        // x position of columns so they're next to each other
        column.x = i * cellSize
        // random stack height for column
        column.stackHeight = 10 + Math.random() * maxHeight
        // add counter to count stack height
        column.stackCounter = 0
        // add column to columns array
        columns.push(column)
    }
}

draw = () => {
    // semi transparent black rectangle on top of canvas to fade older characters
    ctx.fillStyle = "rgba(0, 0, 0, "+ fadingSpeed +")"
    // fill out whole canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // set font size and name
    ctx.font = (cellSize - 2) + "px monospace"
    // set characters' color
    ctx.fillStyle = "rgb(0, 255, 0)"
    // randomly drawing random characters
    for (let i = 0; i < columns.length; i++) {
        // pick random ascii character (change 100 to a higher/lower number to change characters)
        let randomCharacter = String.fromCharCode(33 + Math.floor(Math.random() * 100))
        // fill out canvas columns with random characters
        ctx.fillText(randomCharacter, columns[i].x, columns[i].stackCounter * cellSize + cellSize)
        // if stack is at its height limit, pick new random height and reset counter
        if (++columns[i].stackCounter >= columns[i].stackHeight) {
            columns[i].stackHeight = 10 + Math.random() * maxHeight
            columns[i].stackCounter = 0
        }
    }
}

// drawing loop
action = () => {    
    draw()
    setTimeout(action, 70) // change number to change speed of falling letters
}