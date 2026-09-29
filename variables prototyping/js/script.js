/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let flowerSize = 10;
let flowerSway = 0;
function setup() {
    createCanvas(600, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220, 235, 245);

    flowerSize = constrain(flowerSize + 0.5, 10, 150);
    
    flowerSway = sin(frameCount * 0.02) * 5;

    fill(100, 150, 80);
    noStroke();
    rect(0, 350, 600, 50);

    stroke(70, 130, 70);
    strokeWeight(10 - flowerSize / 20);
    line(300, 350, 300, 350 - flowerSize);


    fill(240, 150, 180);
    ellipse(300, 200, flowerSize);
    ellipse(350, 250, flowerSize);
    ellipse(300, 300, flowerSize);
    ellipse(250, 250, flowerSize);

    fill(255, 200, 80);
    ellipse(300, 250, flowerSize * 0.6);

}