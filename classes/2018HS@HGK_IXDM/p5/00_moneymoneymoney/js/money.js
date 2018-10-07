class Money{
    constructor(_char){
        this.c = _char;
        this.r = random(5, 100);
        // this.pos = createVector(random(width), random(height));
        this.pos = createVector(random(0, -50), random(height, height + 50));
        let acc_x = random(0.01, 0.05) * this.r;
        let acc_y = random(-0.01, -0.05) * this.r;
        this.acc = createVector(acc_x, acc_y);
    }
    show(){
        textSize(this.r);
        text(this.c, this.pos.x, this.pos.y);
    }
    update(){
        this.pos.add(this.acc);
        this.edge();
    }
    edge(){
        if(this.pos.x > width) this.pos.x = -50;
        if(this.pos.y < 0) this.pos.y = height + 50;
    }
}