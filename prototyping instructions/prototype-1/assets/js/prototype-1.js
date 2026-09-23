/**
 * SUNSET
 * Jad Nami
 * 
 * A simple beach sunset made using basic p5.js drawing instructions.!
 */

"use strict";

/**
 * Creates the canvas and draws the sunset scene.
*/
function setup() {
     createCanvas(600, 400);
    background(247, 166, 91);

     // Sun
    fill(255, 217, 90);
    noStroke();
    ellipse(450, 120, 120);

    // Ocean
    fill(59, 142, 165);
    rect(0, 250, 600, 150);

    
}


/**
 * 
*/
function draw() {

}