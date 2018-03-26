class FallingObject {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.gravity = random(-5, 5);
        this.r = 10;
    }
    update() {
        this.pos.y += this.gravity;
        this.r -= 0.05;
        if(this.r < 3)this.r = 3;
    }
    show() {
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}