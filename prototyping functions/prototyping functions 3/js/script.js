/**
 * Shape Chameleon
 * Author: Jad Nami
 *
 * One function draws different shapes using parameters.
 */

"use strict";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  // Draw different shapes using the same function
  drawShape(100, 120, 80, "circle", "tomato");
  drawShape(280, 120, 80, "square", "royalblue");
  drawShape(100, 280, 80, "triangle", "gold");
  drawShape(280, 280, 80, "circle", "mediumseagreen");
}

