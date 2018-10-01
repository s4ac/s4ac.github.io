let cnv;
// let posX;
function setup() {
    // here I set up
    cnv = createCanvas(innerWidth, innerHeight); // hier I set my canvas size
    cnv.parent('p5Sketch');// here I tell the canvas to be part of that div
    background(51);
    // frameRate(1);
    for (let i = 0; i < 10; i++) {
        // execute
        console.log(i);
    }
}

function draw() {
    // here I draw
    background(0, 255, 255);

    fill(random(255), random(255), random(255));
    stroke(255, 0, 0);
    // drawing a circle hint x, y, width , height
    // ellipse(mouseX - 100, mouseY, random(30, 100), 300);
    // drawing a rectangle
    // fill(0);
    // rect(mouseX, mouseY, 300, 100);
    // text('', x, y, w, h);
    // for (let i = 0; i < 2; i++) {
    //     // execute
    //     fill(255);
    //     let posX = (mouseX + i * 100) - 50;
    //     ellipse(posX, mouseY, 100);
    //     fill(0);
    //     ellipse(posX, mouseY, 10);
    // }
    // noFill();
    // beginShape();
    // vertex(mouseX - 100, mouseY + 150)
    // vertex(mouseX - 50, mouseY + 100)
    // vertex(mouseX + 50, mouseY + 100)
    // vertex(mouseX + 100, mouseY + 150)
    // endShape();
    for (let i = 0; i < 4; i++) {
        face(mouseX * i, mouseY * i);
    }
}

function face(x, y) {
    for (let i = 0; i < 2; i++) {
        // execute
        fill(255);
        let posX = (x + i * 100) - 50;
        ellipse(posX, y, 100);
        fill(0);
        ellipse(posX, y, 10);
    }
    // console.log(posX);
    noFill();
    beginShape();
    vertex(x - 100, y + 150);
    vertex(x - 50, y + 100);
    vertex(x + 50, y + 100);
    vertex(x + 100, y + 150);
    endShape();
}

function windowResized() {
    // here I resize the canvas
    resizeCanvas(innerWidth, innerHeight);
}

