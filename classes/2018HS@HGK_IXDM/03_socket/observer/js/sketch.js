let cnv;
let socket;
function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  background(255);
  // connect the socket to our server
  socket = io.connect('http://localhost:5000');
  socket.on('data', newDrawing); // when recieving data we display that with the callback function

}

function newDrawing(data){
  noStroke();
  fill(0, 255, 0);
  ellipse(data.x, data.y, 10);
}

function draw() {
  // background(51);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}