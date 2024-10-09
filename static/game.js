var canvas //setting up variables

function preLoad(){

}
function setup(){//set canvas, posistion, and size. ensure it fills screen. 
    frameRate(60)
    rectMode(CORNER)
    ellipseMode(CORNER)
    canvas = createCanvas(1600, 900)
    canvas.position(150, 50)
    textWrap(WORD)
}

function draw(){//draw things based on game state
    background(100)
    strokeWeight(0)
}