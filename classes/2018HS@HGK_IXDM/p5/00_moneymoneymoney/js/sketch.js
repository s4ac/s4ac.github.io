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

// document.getElementById('my-image').addEventListener('mousemove', generateMessage);

function generateMessage(event){
    console.log(event);
    console.log('event fired')
}

document.getElementById('my-form').addEventListener('keyup', whatIsTyping)

function whatIsTyping(event){
    console.log(event.key);
}

// get id ov hoovered element in webpage
// thanks to stackoverflow
let lastID = null;

let handleMouseover = function (e) {
    let target = e.target || e.srcElement;
    lastID = target.id;
    console.log(lastID);
};

if (document.addEventListener) {
    document.addEventListener('mouseover', handleMouseover, false);
}
else {
    document.attachEvent('onmouseover', handleMouseover);
}