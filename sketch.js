function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220);
}

function draw() {
  line(windowWidth/2,windowHeight/2,mouseX,mouseY);
}