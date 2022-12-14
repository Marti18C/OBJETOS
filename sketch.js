//let nPelotas = random();
let pelotas = [];
//let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // for (let i = 0; i < nPelotas; i++) { pelotas[i] = new RandomWalek(i);}
}

function draw() {
    // background(200);


    //for (let i = 0; i < nPelotas; i++) {
    for (let i = 0; i < pelotas.length; i++) {
        //pelotas[i].update(t);
        if (pelotas[i].isAlive) {
            pelotas[i].update();
            pelotas[i].display();
        } else {
            pelotas.splice(i, 1);
        }
    }
    // t += 0.01;
}

function mouseClicked() {
    background("rgba(255, 255, 255, .2)");
    for (let i = 0; i < 200; i++) {
        let nuevaPlanta = new Plantita(mouseX, mouseY);
        pelotas.push(nuevaPlanta);
    }


    //let nuevaPlanta = new Plantita(mouseX, mouseY);
    //pelotas.push(nuevaPlanta);
    //print(pelotas.length);

}

//------------------------
//-----CLASES-------------
//------------------------
//--------------Random Walker
//---------------------------

class Plantita {
    constructor(_mouseX, _mouseY) {

        this.red = random(150, 255);
        this.green = random(100, 255);
        this.blue = random(100, 150);

        this.t = 0;
        this.tSpeed = random(0.2);
        this.noiseShift = random(1000);
        this.lifeSpam = int(random(30, 50));

        this.isAlive = true;

        this.pos = createVector(_mouseX, mouseY);
        this.speed = createVector(random(-4, 4), random(-4, 4));
        this.diametro = random(10, 30);
        this.bolitaFinal = this.diametro / 1.5;
        print('Hola: viviré ' + this.lifeSpam + ' frames.');

    }
    update(_t) {

        this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.1, 0.1));

        this.pos.add(this.speed)
        this.t += this.tSpeed;

        this.lifeSpam--;

    }
    display() {
        stroke("rgba(1, 1, 1, .2)");
        strokeWeight(3);
        fill(this.red, this.green, this.blue)
        ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
        if (this.lifeSpam <= 0) {
            this.muriending();
        }

    }
    muriending() {
        this.diametro -= 0.6;
        if (this.diametro <= 0) {
            this.isAlive = false;
            print("me morí, porque mi vida es " + this.isAlive);
            ellipse(this.pos.x, this.pos.y, this.bolitaFinal, this.bolitaFinal);
        }

    }
}