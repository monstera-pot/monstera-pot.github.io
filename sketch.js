var img;

function setup() {
  createCanvas(windowWidth, windowHeight); //variable según ancho de ventana
  background(220);
  img = loadImage("images/galaxywebp");
}

function draw() {
  fill(random(255));
  circle(random(windowWidth), random(windowHeight), random(200));
  //background(220);
  //Image(img, mouseX, mouseY);
}

function mousePressed() {
  userStartAudio();
  for (var i = 0; i < 100; i++) {
    fill(random(255), random(255), random(255));
    circle(random(800), random(800), random(200));
  }
}

function windowResized() {
  //listener q se ejecuta c/vez que cambia el tamaño de la ventana
  resizeCanvas(windowWidth, windowHeight);
}
