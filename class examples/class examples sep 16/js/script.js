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
function setup() {

    //single line comment
    createCanvas(500, 500);
    background(0,0,0)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,0,0);
    //call the function - run the code
    drawRoof();
    drawHouseBody();


}
//function to draw roof
function drawRoof(){
    push();
    fill(155,155,155);
    triangle(30,75,65,20,100,75);
    pop();

}
function drawHouseBody(){
    push ();
    fill(255,0,0);
    rect(30,75,50,50);
    pop();

}

