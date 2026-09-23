/**
 * Alien
 * Jad Nami
 *
 * A simple alien character made using basic p5.js shapes.
 */

/**
 * Creates the canvas and draws the alien.
 */
function setup() {
    createCanvas(600, 400);
    background(30, 35, 55);

     // Alien head
    fill(100, 180, 140);
    ellipse(300, 200, 260, 300);

    // Eyes
    fill(20, 25, 35);
    ellipse(245, 180, 55, 100);
    ellipse(355, 180, 55, 100);

    // Eye highlights
    fill(255);
    ellipse(235, 165, 12, 20);
    ellipse(345, 165, 12, 20);

    // Mouth
    fill(40, 60, 50);
    ellipse(300, 275, 80, 35);
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}