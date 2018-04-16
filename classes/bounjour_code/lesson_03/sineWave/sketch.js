let radius = 10;
let vertices = 50;
let loop = 20;//number of polygons
let wave = 0;
let waveHeight = 2;// height of the wave
let waveFreq = 1;// frequency of the wave
let period = 2;// how many time the waveFreq cycles trought two_PI
let inc;// this regulates by how much the sinWave growsa aka speed
let slider;
let cnv;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  inc = PI / 50;// here you can change the speed
}

function draw() {
  background(0);
  noFill();
  stroke(255)
  vertices = document.getElementById('vertices').value;
  for (let i = 1; i < loop; i++) {
    waveFreq = map(i, 0, loop, 0, TWO_PI * period);
    // this part need to be explained really well!!!
    drawPolygon(vertices, i, width / 2, height / 2 + (i * sin(wave + waveFreq) * waveHeight));// change here the posY position to make the circles mive on y axis
  }
  wave += inc;
}

function drawPolygon(vertices, num, posX, posY) {
  // how to draw a circle using sine and cosine
  beginShape(POINTS);
  for (let i = 0; i < vertices; i++) {
    let angle = map(i, 0, vertices, 0, TWO_PI);
    let x = num * radius * cos(angle) + posX;
    // we divide the radius by 2 to create a 3d effect
    let y = num * (radius / 2) * sin(angle) + posY;// change the posY to move the single circles up and down
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}