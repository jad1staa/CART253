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

let sunX = 100;
let waveOffset = 0;
function setup() {
    createCanvas(600, 400);
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  background(120 + sunX / 5, 190 - sunX / 5, 230 - sunX / 5);

    // Move the sun across the sky
    sunX = constrain(sunX + 1, 100, 500);

    //sun drawing
    noStroke();
    fill(255, 220, 80);
    ellipse(sunX, 120, 70);

     //ocean drawing
    fill(40, 140, 190);
    noStroke();
    rect(0, 250, 600, 150);

    // Move the waves
    waveOffset = waveOffset + 0.05;

    //wave drawing
    stroke(180, 220, 240);
    strokeWeight(3);
    noFill();

    arc(100 + sin(waveOffset) * 10, 290, 50, 15, PI, TWO_PI);
        arc(150 + sin(waveOffset + 1) * 10, 300, 50, 15, PI, TWO_PI);       
    arc(200 + sin(waveOffset) * 10, 320, 50, 15, PI, TWO_PI);
    arc(300 + sin(waveOffset) * 10, 275, 50, 15, PI, TWO_PI);
    arc(400 + sin(waveOffset) * 10, 310, 50, 15, PI, TWO_PI);
    arc(500 + sin(waveOffset) * 10, 290, 50, 15, PI, TWO_PI);   
}