var canvas //setting up variables

function setup(){//set canvas, posistion, and size. ensure it fills screen. 
    frameRate(60)
    rectMode(CORNER)
    ellipseMode(CORNER)
    canvas = createCanvas(1600, 900)
    canvas.position(150, 50)
    textWrap(WORD)
    activateMainMenu()
    prompt("Resize The Window If The Game Isn't Displayed Properly.", "Ctrl + ScrollWheel")
}

function draw(){//draw things based on game state
    background(100)
}