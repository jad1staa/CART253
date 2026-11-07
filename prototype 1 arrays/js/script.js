
/**
 * Bubble Universe
 * Jad Nami
 *
 * An animated collection of colourful bubbles.
 * Explores arrays of objects and loops.
 */

"use strict";

let bubbles = [];

function setup() {
    createCanvas(500, 500);

    // Create 30 bubbles
    for (let i = 0; i < 30; i++) {
        bubbles.push({
            x: random(width),
            y: random(height),
            size: random(10, 40),
            speed: random(0.5, 2),
            colour: color(random(100, 255), random(100, 255), 255)
        });
    }
}

function draw() {
    background(15, 20, 45);

    // Move and draw every bubble
    for (let bubble of bubbles) {
        bubble.y -= bubble.speed;

        if (bubble.y < -bubble.size) {
            bubble.y = height + bubble.size;
            bubble.x = random(width);
        }

        noStroke();
        fill(bubble.colour);
        ellipse(bubble.x, bubble.y, bubble.size);
    }
}
