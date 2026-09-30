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

let balloonX = 300;
let balloonY = 300;
let balloonSize = 60;
let sway = 0;
function setup() {
    createCanvas(600, 400);
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(220, 240, 250);

  // draw balloon
  fill(240, 80, 100);
  noStroke();
  ellipse(balloonX, balloonY, balloonSize);

  // draw string
  stroke(80);
  strokeWeight(2);
  line(balloonX, balloonY + balloonSize / 2, balloonX, 400);

}