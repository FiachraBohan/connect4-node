var canvas //setting up variables
var gameGrid = []

function preLoad(){

}
function setup(){//set canvas, posistion, and size. ensure it fills screen. 
    frameRate(60)
    rectMode(CORNER)
    ellipseMode(CORNER)
    canvas = createCanvas(1600, 900)
    canvas.position(150, 50)
    textWrap(WORD)
    makeGrid(7,6)
}

function draw(){//draw things based on game state
    background(100)
    drawGrid()
}

//GAME SET-UP
class GameTile{
    constructor(row,column){
        this.r = row;
        this.c = column;
        this.player = 0;
        this.neighbours = [];
    }
    addNeighbours(){

    }
    render(){
        fill("gray")
        strokeWeight(5)
        rect(this.r*100,this.c*100,100,100)
    }
}

function makeGrid(r,c){
    let temp = []
    for (let i = 0; i<c;i++){
        for (let j = 0; j<r;j++){
            temp.push(new GameTile(j,i))
        }
        gameGrid.push(temp)
        temp = []
    }
    console.log(gameGrid)
}

function drawGrid(){
    for (column in gameGrid){
        for(tile in gameGrid[column]){
            gameGrid[column][tile].render()
        }
    }
}

// function drawGrid(){//draws the connect 4 grid (7*6)
//     //POSSIBLE UPDATE: make it so grid of different sizes can be made
//     strokeWeight(10)
//     let tilewidth = 100
//     let xorigin = 400
//     let yorigin = 200
//     for (let i = 0; i <= 7; i++){
//         let x = xorigin + tilewidth * i
//         line(x, yorigin, x, yorigin + tilewidth * 6)
//     }
//     for (let i = 0; i <=6; i++){
//         let y = yorigin + tilewidth * i
//         line(xorigin, y, xorigin + tilewidth * 7, y)
//     }
// }