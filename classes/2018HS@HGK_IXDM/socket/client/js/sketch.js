let cnv;
let socket; // declare a socket variable
function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  // connect the socket to our server
  socket = io.connect('http://localhost:5000'); 
}

function draw() {
  background(51);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

function mouseMoved(){
  const data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
}