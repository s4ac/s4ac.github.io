let cnv;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
}

function draw() {
    background(0, 255, 255);
}

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
}