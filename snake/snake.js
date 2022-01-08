const canvas = document.getElementById("game-board")
const ctx = canvas.getContext("2d")

class SnakePart { // building a snake
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let speed = 2 // change this to start faster or slower
let tileCount = 20 // number of tiles on board
let tileSize = canvas.width / tileCount - 2

// snake always starts in the middle of board
let headX = 10
let headY = 10
const snakeParts = []
let tailLength = 0

// apple always appears at random coordinates
let appleX = Math.floor(Math.random() * 20)
let appleY = Math.floor(Math.random() * 20)

let inputsXVelocity = 0
let inputsYVelocity = 0

let xVelocity = 0
let yVelocity = 0

let score = 0

// const gulpSound = new Audio("gulp.mp3")

//game loop
drawGame =()=> {
    xVelocity = inputsXVelocity
    yVelocity = inputsYVelocity
    changeSnakePosition()
    let result = isGameOver()

    if (result) {
        return
    }

    clearScreen()
    checkAppleCollision()
    drawApple()
    drawSnake()
    drawScore()

// increase speed depending on score
    if (score > 5) {
        speed = 4
    } else if (score > 7) {
        speed = 6
    } else if (score > 10) {
        speed = 8
    } else if (score > 15) {
        speed = 10
    } else if (score > 20) {
        speed = 15
    } else if (score > 25) {
        speed = 20
    } else if (score > 30) {
        speed = 25
    }

    setTimeout(drawGame, 1000 / speed)
}

isGameOver =()=> {
    let gameOver = false
    if (yVelocity === 0 && xVelocity === 0) {
        return false
    }
    // borders of board
    if (headX < 0) {
        gameOver = true
    } else if (headX === tileCount) {
        gameOver = true
    } else if (headY < 0) {
        gameOver = true
    } else if (headY === tileCount) {
        gameOver = true
    }

    // game over condition
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i]
        if (part.x === headX && part.y === headY) {
        gameOver = true
        break
        }
    }

    
    // pop-up window
    if (gameOver) {
        alert("Game over. Please close this window and restart. :)")
    }
    return gameOver
}

// score position and look
drawScore =()=> {
    ctx.fillStyle = "white"
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width - 50, 10)
}

// board itself
clearScreen =()=> {
    ctx.fillStyle = "#4C4C6D"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// snake drawing
drawSnake =()=> {
    ctx.fillStyle = "#E8F6EF"
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i]
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
    }

    snakeParts.push(new SnakePart(headX, headY)) // snake growth
    while (snakeParts.length > tailLength) {
        snakeParts.shift() // remove further item from snake parts if have more than tail size
    }
    // snake head
    ctx.fillStyle = "#B8DFD8"
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

changeSnakePosition =()=> {
    headX = headX + xVelocity
    headY = headY + yVelocity
}

drawApple =()=> {
    ctx.fillStyle = "#FFC947"
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}

checkAppleCollision =()=> {
    if (appleX === headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        tailLength++
        score++
        // gulpSound.play()
    }
}

document.body.addEventListener("keydown", keyDown)

// keys assigning
function keyDown(event) {
    // up is 38, 87 is w
    if (event.keyCode == 38 || event.keyCode == 87) {
        if (inputsYVelocity == 1) return
        inputsYVelocity = -1
        inputsXVelocity = 0
    }
    // down is 40, 83 is s
    if (event.keyCode == 40 || event.keyCode == 83) {
        if (inputsYVelocity == -1) return
        inputsYVelocity = 1
        inputsXVelocity = 0
    }
    // left is 37, 65 is a
    if (event.keyCode == 37 || event.keyCode == 65) {
        if (inputsXVelocity == 1) return
        inputsYVelocity = 0
        inputsXVelocity = -1
    }
    // right is 39, 68 is d
    if (event.keyCode == 39 || event.keyCode == 68) {
        if (inputsXVelocity == -1) return
        inputsYVelocity = 0
        inputsXVelocity = 1
    }
}

drawGame()

// game title animation
const spans = document.querySelectorAll('.word span')

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active')
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active')
    });
    // Initial animation
    setTimeout(() => {
        span.classList.add('active')
    }, 750 * (idx+1))
})