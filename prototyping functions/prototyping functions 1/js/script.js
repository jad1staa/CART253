/**
 * Circle Factory
 * Author: Jad Nami
 *
 * Creates a collection of randomly generated circles.
 */

"use strict";

let circles = [];

function setup() {
  createCanvas(400, 400);

  // Create 20 circles using our function
  for (let i = 0; i < 20; i++) {
    circles.push(createCircle());
  }
}

function draw() {
  background(240);

  // Draw every circle
  for (let circle of circles) {
    drawCircle(circle);
  }
}
