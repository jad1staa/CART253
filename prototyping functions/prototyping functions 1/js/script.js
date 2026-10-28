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
/**
 * Returns a circle with random properties.
 */
function createCircle() {
  return {
    x: random(width),
    y: random(height),
    size: random(10, 50),
    color: color(random(255), random(255), random(255))
  };
}

/**
 * Draws a circle using its data.
 */
function drawCircle(circle) {
  noStroke();
  fill(circle.color);
  ellipse(circle.x, circle.y, circle.size);
}