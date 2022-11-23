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

        this.name = _name;
        this.posX = random(width);
        this.posY = random(height);
        this.speed = random(4);
        this.diametro = random(10, 50);
        print('Hola, soy la pelota' + this.name);

    }
    update() {
        this.posX += random(-this.speed, this.speed);
        this.posY += random(-this.speed, this.speed);

    }
    display() {
        ellipse(this.posX, this.posY, this.diametro, this.diametro);

    }

}