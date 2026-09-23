/**
 * Variables Challenge: Mr. Furious
 * Jad Nami
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

// The sky's colour
let sky = {
  r: 160,
  g: 180,
  b: 200
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);

  // Make Mr. Furious gradually turn red
  mrFurious.fill.g = constrain(mrFurious.fill.g - 1, 0, 255);
  mrFurious.fill.b = constrain(mrFurious.fill.b - 1, 0, 255);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}