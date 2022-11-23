let nPelotas = 100;
let pelotas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < nPelotas; i++) {
        pelotas[i] = new RandomWalek(i);
    }
}

function draw() {

    for (let i = 0; i < nPelotas; i++) {
        pelotas[i].update();
        pelotas[i].display();
    }

}

//------------------------
//-----CLASES-------------
//------------------------
//--------------Random Walker
//---------------------------

class RandomWalek {
    constructor(_name) {

        this.red = random(0, 50);
        this.green = random(100, 255);
        this.blue = random(100, 150);

        this.name = _name;
        this.posX = width / 2;
        this.posY = height / 2;
        this.speed = random(2, 10);
        this.diametro = random(10, 50);
        print('Hola, soy la pelota' + this.name);

    }
    update() {
        this.posX += random(-this.speed, this.speed);
        this.posY += random(-this.speed, this.speed);

    }
    display() {
        fill(this.red, this.green, this.blue)
        ellipse(this.posX, this.posY, this.diametro, this.diametro);

    }

}