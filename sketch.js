let pelota1;
let pelota2;
let pelota3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pelota1 = new RandomWalek();
    pelota2 = new RandomWalek();
    pelota3 = new RandomWalek();
}

function draw() {
    pelota1.update();
    pelota1.display();

    pelota2.update();
    pelota2.display();

    pelota3.update();
    pelota3.display();
}

//------------------------
//-----CLASES-------------
//------------------------

//--------------Random Walker
//---------------------------

class RandomWalek {
    constructor() {
        this.posX = random(width);
        this.posY = random(height);
        this.speed = random(4);
        this.diametro = random(10, 50);
        print('Holass');

    }
    update() {
        this.posX += random(-this.speed, this.speed);
        this.posY += random(-this.speed, this.speed);

    }
    display() {
        ellipse(this.posX, this.posY, this.diametro, this.diametro);

    }

}