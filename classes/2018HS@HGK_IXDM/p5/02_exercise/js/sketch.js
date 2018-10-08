let cnv;
let data = [];
let collectData = false;
let drawCollectedData = false;
let index = 0;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
    noFill();
    strokeWeight(10);
    stroke(255, 255, 0);
}

function draw() {
    background(0, 255, 255);
    if (collectData) {
        console.log('collecting data...');
        let dataEntry = {
            x: mouseX,
            y: mouseY
        }
        data.push(dataEntry);
    }
    if (drawCollectedData) {
        console.log('drawing...')
        // beginShape();
        // for (let i = 0; i < data.length; i++) {
        for (let i = 0; i < 15; i++) {
            let dataIndex = (index + i) % data.length;
            point(data[dataIndex].x, data[dataIndex].y);
        }
        // }
        // endShape();
        index++;
        index = index % data.length;
        console.log(index);
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}

/**
 * EVENT LISTENERS
 */
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseenter', triggerFunction);

function triggerFunction(event) {
    // console.log('mouse hovers the button...');
    collectData = true;
    if (drawCollectedData) {
        drawCollectedData = false;
        data = [];
        index = 0;
    }
}


const release = document.getElementById('release');

release.addEventListener('click', releaseFucntion);

function releaseFucntion(event) {
    // console.log('mouse clicks the button...')
    collectData = false;
    drawCollectedData = true;

}