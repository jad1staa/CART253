/**
 * Traffic Party
 * Author: Jad Nami
 *
 * Multiple circles move using the same function.
 */

"use strict";

let circles = [];

function setup() {
  createCanvas(400, 400);

  // Create 10 circles
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(15, 35),
      speed: random(1, 4)
    });
  }
}

function draw() {
  background(30);

  // Move and draw every circle
  for (let circle of circles) {
    moveCircle(circle);
    drawCircle(circle, "lime");
  }
}

/**
 * Moves a circle and resets it when it leaves the canvas.
 */
function moveCircle(circle) {
  circle.x += circle.speed;

  if (circle.x > width + circle.size) {
    circle.x = -circle.size;
  }
}

/**
 * Draws a circle using the supplied colour.
 */
function drawCircle(circle, circleColor) {
  noStroke();
  fill(circleColor);
  ellipse(circle.x, circle.y, circle.size);
}