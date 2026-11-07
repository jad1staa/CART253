
/**
 * Word Salad
 * Jad Nami
 *
 * A collection of words displayed randomly.
 * Explores arrays of strings and array indexing.
 */

"use strict";

let words = [
    "DREAM", "CREATE", "EXPLORE", "CHAOS",
    "LIFE", "MAGIC", "DISCOVER", "WONDER",
    "FUTURE", "GROW", "IMAGINE", "BEGIN"
];

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
    textFont("sans-serif");
}

function draw() {
    background("#f3e9d2");

    for (let i = 0; i < words.length; i++) {
        fill(random(80, 180), random(40, 130), random(100, 200));
        textSize(random(18, 35));

        let x = random(width);
        let y = random(height);

        text(words[i], x, y);
    }
}
