/**
 * Keyboard Orchestra
 * Author: Jad Nami
 *
 * Press different keys to change the circle's colour.
 */

"use strict";

let circleColor = "red";

function setup() {
  createCanvas(400, 400);
}

/**
 * Draws the circle.
 */
function draw() {
  background(240);

  fill(circleColor);
  noStroke();
  ellipse(width / 2, height / 2, 150);
}

/**
 * Changes colour when a key is pressed.
 */

// press r for red, b for blue, g for green, y for yellow
function keyPressed() {
  if (key === "r") {
    circleColor = "red";
  } else if (key === "b") {
    circleColor = "blue";
  } else if (key === "g") {
    circleColor = "green";
  } else if (key === "y") {
    circleColor = "yellow";
  }
}