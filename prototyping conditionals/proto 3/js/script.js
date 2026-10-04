/**
 * Split Personalities
 * Jad Nami
 *
 * A circle that changes depending on which side of the canvas the mouse is on.
 */
"use strict";

const circle = {
  x: 200,
  y: 200,
  size: 100
};

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Changes the circle based on the mouse position
 */
function draw() {
  if (mouseX < 200) {
    background("#ffffcc");
    circle.size = 50;
    fill("#00ff00");
  }
  else {
    background("#ccccff");
    circle.size = 150;
    fill("#0000ff");
  }

  noStroke();
  ellipse(circle.x, circle.y, circle.size);
}