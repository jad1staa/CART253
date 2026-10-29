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

/**
 * Moves the specified ball.
 */
function moveBall(ball) {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces the specified ball off the walls.
 */
function bounceBall(ball) {
  if (ball.x > width || ball.x < 0) {
    ball.velocity.x *= -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draws the specified ball.
 */
function drawBall(ball) {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}

/**
 * Adds a ball when the mouse is clicked.
 */
function mousePressed() {
  balls.push(createBall());
}