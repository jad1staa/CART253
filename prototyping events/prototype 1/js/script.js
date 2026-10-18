/**
 * Button Addict
 * Author: Jad Nami
 *
 * Every click makes the circle bigger.
 * The circle can't stop growing.
 */

"use strict";

let circleSize = 50;

function setup() {
  createCanvas(400, 400);
}

/**
 * Draws the circle.
 */
function draw() {
  background(240);

  fill(255, 100, 100);
  noStroke();

  ellipse(width / 2, height / 2, circleSize);
}

/**
 * Makes the circle grow when clicked.
 */
function mousePressed() {
  circleSize += 20;
}