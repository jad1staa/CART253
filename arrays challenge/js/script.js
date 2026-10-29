/**
 * Boingo
 * Author: Jad Nami
 *
 * Click to create bouncing balls.
 * Adapted from the CART 253 Arrays Challenge starter code
 * by Pippin Barr.
 */

"use strict";

let balls = [];

/**
 * Creates the canvas.
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Creates a random ball and returns it.
 */
function createBall() {
  return {
    x: 200,
    y: 200,
    size: 20,
    fill: color(random(255), random(255), random(255)),
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
}

/**
 * Moves and draws all balls.
 */
function draw() {
  background("#87ceeb");

  for (let ball of balls) {
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}
