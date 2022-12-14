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
    background("rgba(0, 0, 0, .5)");
    for (let i = 0; i < 1000; i++) {
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

        this.red = random(20, 40);
        this.green = random(150, 40);
        this.blue = random(150, 40);

        this.t = 0;
        this.tSpeed = random(0.9);
        this.noiseShift = random(1000);
        this.lifeSpam = int(random(30, 50));

        this.isAlive = true;

        this.pos = createVector(_mouseX, mouseY);
        this.speed = createVector(random(-20, 0), random(0, 20));
        this.diametro = random(0, 30);
        this.bolitaFinal = this.diametro / 1.5;
        print('Hola: viviré ' + this.lifeSpam + ' frames.');

    }
    update(_t) {

        this.speed.rotate(map(noise(this.t + this.noiseShift), 300, 80, 100, 1000));

        this.pos.add(this.speed)
        this.t += this.tSpeed;

        this.lifeSpam--;

    }
    display() {
        stroke("rgba(255, 255, 255, .2)");
        strokeWeight(9);
        //noStroke();
        fill(this.red, this.green, this.blue)
        ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
        if (this.lifeSpam <= 0) {
            this.muriending();
        }

    }
    muriending() {
        this.diametro -= 0.01;
        if (this.diametro <= 2) {
            this.isAlive = false;
            print("me morí, porque mi vida es " + this.isAlive);
            fill("rgba(255, 255, 255, .9)");
            ellipse(this.pos.x, this.pos.y, this.bolitaFinal, this.bolitaFinal);
        }

    }
}