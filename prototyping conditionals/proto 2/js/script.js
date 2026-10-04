/**
 * Lucky Circle
 * Jad Nami
 *
 * A circle that sometimes becomes surprisingly large.
 */
"use strict";

const circle = {
  x: 200,
  y: 200,
  size: 50
};

let lucky = false;

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draws the circle
 */
function draw() {
  background("#aaaaaa");

  let chance = random(100);

    if (chance < 10) {
        lucky = true;
    }
    else {
        lucky = false;
    }

    if (lucky) {
        circle.size = 150;
        fill("#ffff00");
    }
    else {
        circle.size = 50;
        fill("#ff0000");
    }

  fill("#ff0000");
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
}