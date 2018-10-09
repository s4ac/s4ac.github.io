let cnv;
let posX = 100;
let dataCollection = false;
let showCollectedData = false;
let mousePos = {
    x: 100,
    y: 500
};
let data = [];
let index = 0;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
}

function draw() {
    background(0, 255, 255);
    // collect data
    if (dataCollection == true) {
        mousePos = {
            x: mouseX,
            y: mouseY
        };
        data.push(mousePos);
        console.log(data);
    }
    // show data
    stroke(0, 0, 255);
    // strokeWeight(10);
    noFill();
    if (showCollectedData == true) {
        beginShape();
        for (let i = 0; i < data.length; i++) {
            let x = data[i].x;
            let y = data[i].y;
            // stroke(0, 0, 255);
            vertex(x, y);
        }
        endShape();
        let loop = 30;
        for (let i = 0; i < loop; i++) {
            let internIndex = (index + i) % data.length;
            let x = data[internIndex].x;
            let y = data[internIndex].y;

            stroke(255, 0, 0);
            ellipse(x, y, 10);
        }
        index++;
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}
/**
 * EVENT LISTENER
 */
let trigger = document.getElementById('trigger');
trigger.addEventListener('mouseenter', triggerFunction);

function triggerFunction(event) {
    console.log('trigger event...');
    if (showCollectedData == true) {
        showCollectedData = false;
        data = [];
        index = 0;
    }
    dataCollection = true;
}

const release = document.getElementById('release');

release.addEventListener('click', releaseFunction);

function releaseFunction(event) {
    console.log('release event....');
    dataCollection = false;
    showCollectedData = true;
}