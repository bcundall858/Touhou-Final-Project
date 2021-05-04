var fairy; //player
let reimu; //image for player
let stage; //background image
let song;
let song2;
let song3;

let lives = 3;

var fade;
var fadeAmount = 1

var dan = []; //bullets L1
var num_dan = 10; //amount of bullets L1

var dan2 = []; //bullets L2
var num_dan2 = 20; //amount of bullets L2

var dan3 = []; //bullets L3
var num_dan3 = 30; //amount of bullets L3

var dan4 = []; //bullets L4
var num_dan4 = 40; //amount of bullets L4

var dan5 = []; //bullets L5
var num_dan5 = 50; //amount of bullets L5


function preload() {
  song = loadSound('hit.mp3');
  reimu = loadImage('reimu.png');
  stage = loadImage("stage3.gif");
  //stagel = createImg("stage3.gif");
  song2 = loadSound("bgm.mp3");
  song3 = loadSound("deathbgm.mp3");
}

function setup() {
  createCanvas(400, 600);
  fairy = new Player(200, 400);

  for (let i = 0; i < num_dan; i++) {
    dan.push(new Circle());
    dan[i].r = 10;
  }

  for (let i = 0; i < num_dan2; i++) {
    dan2.push(new Circle2());
    dan2[i].r = 10;
  }

  for (let i = 0; i < num_dan3; i++) {
    dan3.push(new Circle3());
    dan3[i].r = 10;
  }

  for (let i = 0; i < num_dan4; i++) {
    dan4.push(new Circle4());
    dan4[i].r = 10;
  }

  for (let i = 0; i < num_dan5; i++) {
    dan5.push(new Circle5());
    dan5[i].r = 10;
  }

  song2.loop();
  fade = 0
}

function draw() {
  background(stage);

  textSize(20);
  text("LIVES:", 300, 30);
  textSize(20);
  text(lives, 370, 30)

  // stagel.position(400, 600); ASK ABOUT BACKGROUND ANIMATION

  //   for (let i = 0; i < num_dan; i++) {
  //     dan[i].update()

  //     if (fairy.collide(dan[i].x, dan[i].y, dan[i].r)) {
  //       dan[i].col = 'red';
  //       //song.stop();
  //     } else {
  //       dan[i].col = 'cyan';
  //       // song2.loop();
  //     }
  //     dan[i].display();
  //   }

  if (song2.currentTime() > 0 && song2.currentTime() < 6) { //stage 1 title
    textSize(75)
    noStroke()
    fill(255, 255, 255, fade)
    text("Stage 1", 75, 200)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -1;

    fade += fadeAmount;
  } else if (song2.currentTime() >= 6 && song2.currentTime() < 16) { //stage 1
    for (let i = 0; i < num_dan; i++) {
      dan[i].update()

      if (fairy.collide(dan[i].x, dan[i].y, dan[i].r)) {
        dan[i].col = 'red';
        //song.stop();
      } else {
        dan[i].col = 'cyan';
        // song2.loop();
      }
      dan[i].display();
    }
  } else if (song2.currentTime() >= 16 && song2.currentTime() < 22) { //stage 2 title
    textSize(75)
    noStroke()
    fill(255, 255, 255, fade)
    text("Stage 2", 75, 200)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -0.5;

    fade += fadeAmount;
  } else if (song2.currentTime() >= 22 && song2.currentTime() < 37) { //stage 2
    for (let i = 0; i < num_dan2; i++) {
      dan2[i].update()

      if (fairy.collide(dan2[i].x, dan2[i].y, dan2[i].r)) {
        dan2[i].col = 'red';
        //song.stop();
      } else {
        dan2[i].col = 'blue';
        // song2.loop();
      }
      dan2[i].display();
    }
  } else if (song2.currentTime() >= 37 && song2.currentTime() < 43) { //stage 3 title
    textSize(75)
    noStroke()
    fill(255, 255, 255, fade)
    text("Stage 3", 75, 200)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -0.5;

    fade += fadeAmount;
  } else if (song2.currentTime() >= 43 && song2.currentTime() < 68) { //stage 3
    for (let i = 0; i < num_dan3; i++) {
      dan3[i].update()

      if (fairy.collide(dan3[i].x, dan3[i].y, dan3[i].r)) {
        dan3[i].col = 'red';
        //song.stop();
      } else {
        dan3[i].col = 'DarkOrchid';
        // song2.loop();
      }
      dan3[i].display();
    }
  } else if (song2.currentTime() >= 68 && song2.currentTime() < 74) { //stage 4 title
    textSize(75)
    noStroke()
    fill(255, 255, 255, fade)
    text("Stage 4", 75, 200)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -0.5;

    fade += fadeAmount;
  } else if (song2.currentTime() >= 74 && song2.currentTime() < 104) { //stage 4
    for (let i = 0; i < num_dan4; i++) {
      dan4[i].update()

      if (fairy.collide(dan4[i].x, dan4[i].y, dan4[i].r)) {
        dan4[i].col = 'red';
        //song.stop();
      } else {
        dan4[i].col = 'Indigo';
        // song2.loop();
      }
      dan4[i].display();
    }
  } else if (song2.currentTime() >= 104 && song2.currentTime() < 110) { //stage 5 title
    textSize(75)
    noStroke()
    fill(255, 255, 255, fade)
    text("Stage 5", 75, 200)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -0.5;

    fade += fadeAmount;

    textSize(55)
    noStroke()
    fill(255, 255, 255, fade)
    text("FINAL STAGE", 20, 300)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -1;

    fade += fadeAmount;
  } else if (song2.currentTime() >= 110 && song2.currentTime() < 150) { //stage 5
    for (let i = 0; i < num_dan5; i++) {
      dan5[i].update()

      if (fairy.collide(dan5[i].x, dan5[i].y, dan5[i].r)) {
        dan5[i].col = 'red';
        //song.stop();
      } else {
        dan5[i].col = 'DarkSlateBlue';
        // song2.loop();
      }
      dan5[i].display();
    }
  }

  keyBoard();
  fairy.display();


}



class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.startTime = millis();
    this.timeAlive = 0;
    this.numLives = 3;
  }

  move(xinc, yinc) {
    this.x += xinc;
    this.y += yinc;
  }

  collide(otherx, othery, otherr) {
    let did_i_collide = (dist(this.x, this.y, otherx, othery) < otherr + this.size)

    if (did_i_collide) {

      lives--; //reset position right here
      this.x = 200;
      this.y = 400;
      
      if (lives <= 0) {



        fill(128, 0, 0, 32);
        rect(0, 0, width, height);
        textAlign(CENTER);
        textSize(32);
        fill('red');
        text("GAME OVER", width / 2, height / 2);
        song2.stop();
        noLoop();
        song3.loop();
      }

    }
    return did_i_collide;

  }

  display() {
    imageMode(CENTER);
    image(reimu, this.x, this.y);
    imageMode(CORNER);

    // this.timeAlive = millis() - this.startTime;
    // this.timeAlive = float(this.timeAlive) / 1000.0;
    // this.timeAlive = round(this.timeAlive, 5);
    // textSize(25);
    // text(this.timeAlive, 20, 30);
  }
}

class Circle {
  constructor() {
    this.r = 25;
    this.col = 255;
    this.x = random(width);
    this.y = random(-300, 300);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y += 3;
    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }
  }
}

class Circle2 {
  constructor() {
    this.r = 25;
    this.col = 255;
    this.x = random(width);
    this.y = random(-300, 300);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y += 3;
    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }
  }
}

class Circle3 {
  constructor() {
    this.r = 25;
    this.col = 255;
    this.x = random(width);
    this.y = random(-300, 300);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y += 3;
    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }
  }
}

class Circle4 {
  constructor() {
    this.r = 25;
    this.col = 255;
    this.x = random(width);
    this.y = random(-300, 300);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y += 3;
    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }
  }
}

class Circle5 {
  constructor() {
    this.r = 25;
    this.col = 255;
    this.x = random(width);
    this.y = random(-300, 300);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y += 3;
    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }
  }
}

function keyBoard() {
  if (keyIsDown(LEFT_ARROW)) {
    fairy.move(-3, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    fairy.move(3, 0);
  } else if (keyIsDown(UP_ARROW)) {
    fairy.move(0, -3);
  } else if (keyIsDown(DOWN_ARROW)) {
    fairy.move(0, 3);
  }
}