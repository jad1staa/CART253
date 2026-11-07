
/**
 * Solar System
 * Jad Nami
 *
 * A miniature solar system with orbiting planets.
 * Explores arrays of objects, loops and nested properties.
 */

"use strict";

let planets = [];

function setup() {
    createCanvas(500, 500);

    planets = [
        { distance: 60, size: 12, speed: 0.03, angle: 0, colour: "#79a9d1" },
        { distance: 100, size: 18, speed: 0.02, angle: 1, colour: "#e8a65b" },
        { distance: 145, size: 22, speed: 0.012, angle: 2, colour: "#d65c4a" },
        { distance: 190, size: 15, speed: 0.008, angle: 3, colour: "#a68bc7" }
    ];
}

function draw() {
    background(8, 12, 30);

    // Draw the sun
    noStroke();
    fill("#ffcf5c");
    ellipse(width / 2, height / 2, 45);

    // Draw and move the planets
    for (let planet of planets) {
        planet.angle += planet.speed;

        let x = width / 2 + cos(planet.angle) * planet.distance;
        let y = height / 2 + sin(planet.angle) * planet.distance;

        // Draw orbit
        noFill();
        stroke(80);
        ellipse(width / 2, height / 2,
            planet.distance * 2);

        // Draw planet
        noStroke();
        fill(planet.colour);
        ellipse(x, y, planet.size);
    }
}
