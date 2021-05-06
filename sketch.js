let w = 400;
let h = 400;
let palettes = ['#6DECFF', '#48F0B4', '#A1FFAF', '#A0F065', '#FFFD54'];
let colours = [];

function setup() {
  createCanvas(w, h);
  noLoop();
}

function draw() {
  background(220);

  for (let y = 0; y < 9; y += 1) {
    for (let x = 0; x < 9; x += 1) {
      stroke(random(palettes))
      
      
      strokeWeight(6);
      resetMatrix();

      ellipse(x * 50, y * 50-50 + 50, 45, 45);
      
      fill('#BDFFEF');
      rect(x * 50, y * 50, 45, 45);
      
      fill(random(palettes));
      ellipse(x * 50+5, y * 50-60 + 50, 1, 1);
      fill(random(palettes));
      ellipse(x * 50+15, y * 50-85 + 50, 5, 5);

    }
  }
}

function mousePressed() {
  redraw();
}