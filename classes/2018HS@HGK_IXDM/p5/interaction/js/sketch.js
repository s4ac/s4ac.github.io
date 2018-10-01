let cnv;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
}

function draw() {
    background(255);
}

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
}

/**
 * HERE WE ADD EVENT LISTENERS
 */

