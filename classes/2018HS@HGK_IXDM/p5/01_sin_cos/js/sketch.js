let cnv;
let sc1;
let sc2;
let liss = [];
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
    noFill();
    strokeWeight(2)
    inc = PI / 180;
    sc1 = new SinCos('left');
    sc2 = new SinCos('top');
    sc2.setSpeed(1.0);
    sc1.setSpeed(1.0)
}

function draw() {
    background(255);
    sc1.show();
    sc2.show();
    const val = createVector(sc2.getPoints().x, sc1.getPoints().y);
    liss.push(val);
    stroke(0, 255, 255);
    strokeWeight(1.5);
    beginShape();
    for (const v of liss) {
        vertex(v.x, v.y);
    }
    endShape();
    strokeWeight(1);
    stroke(255, 0, 0);
    ellipse(sc2.getPoints().x, sc1.getPoints().y, 10)
    if (liss.length > 400) liss.splice(0, 1)
}

class SinCos {
    constructor(position) {
        this.position = position;
        this.setPosition();
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.inc = PI / 50;
        this.alpha = 35;
        this.path = [];
    }
    show() {
        stroke(0);
        strokeWeight(2);
        ellipse(this.cx, this.cy, this.diameter);
        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);
        if (this.position === 'top') this.path.push(this.cx + this.x);
        else if (this.position === 'left') this.path.push(this.cy + this.y);
        let col = this.position === 'top' ? color(0, 0, 255, this.alpha) : color(255, 0, 0, this.alpha);
        stroke(col);
        beginShape()
        let i = this.offset;
        for (const v of this.path) {
            if (this.position === 'top') vertex(v, i);
            else if (this.position === 'left') vertex(i, v);
            i++;
        }
        endShape();
        stroke(255, 0, 255);
        ellipse(this.cx + this.x, this.cy + this.y, this.diameter / 10);
        stroke(0);
        line(this.cx, this.cy, this.cx + this.x, this.cy + this.y);
        strokeWeight(1);
        stroke(0, 255, 0);
        line(0, this.cy + this.y, width, this.cy + this.y);
        line(this.cx + this.x, 0, this.cx + this.x, height);
        this.angle += this.inc;
        if (this.path.length > height - this.offset * 2) this.path.splice(0, 1);
        // if (this.path2.length > width - this.offset * 2) this.path2.splice(0, 1);
    }
    setSpeed(val) {
        this.inc = PI / (50 * val);
    }
    setPosition() {
        this.diameter = windowMin();
        this.r = this.diameter / 2;
        this.offset = this.diameter * 0.15;
        if (this.position === 'top') {
            this.cx = width / 2;
            this.cy = this.diameter / 2 + this.offset;
        } else if (this.position === 'left') {
            this.cx = this.diameter / 2 + this.offset;
            this.cy = height / 2;
        }
        // this.setDimensions();
    }
    setDimensions() {
    }
    getPoints() {
        return {
            x: this.cx + this.x,
            y: this.cy + this.y
        }
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    sc1.setPosition();
    sc2.setPosition();
}

function setVelocity(){
    const slider1 = document.getElementById('slider1').value;
    const slider2 = document.getElementById('slider2').value;
    console.log(slider1, slider2);
    sc1.setSpeed(parseFloat(slider1));
    sc2.setSpeed(parseFloat(slider2));
}

function windowMin() {
    const w = innerWidth;
    const h = innerHeight;
    let result = 0;
    if (w < h) result = h / 5;
    else result = w / 5;
    result = constrain(result, 30, 150);
    return result;
}
