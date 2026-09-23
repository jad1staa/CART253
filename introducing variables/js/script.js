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

// let sunX = 20;
// let sunY = 50;
// let sunSize = 50;
// let r = 255;
// let g = 255;
// let b = 0;

let sun = {
    sunX:20,
    sunY:50,
    sunSize:50,
    r:255,
    g:255,
    b:0
};

let bird = {
    birdX:20,
    birdY:50,
    birdSize:50,
    r:0,
    g:0,
    b:255
}


function setup() {
    createCanvas(400,400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background(0,0,0);

    fill(sun.r,sun.g,sun.b);
    ellipse(sun.sunX,sun.sunY,sun.sunSize,sun.sunSize);

    fill(bird.r,bird.g,bird.b);
    ellipse(bird.x,bird.y,bird.size,bird.size);

    bird.x = bird.x + 1;
    constrain(bird.x, 0, width-100);
    backgroundcolor= backgroundcolor+1


    // ellipse(250,250,ellipse_Size,ellipse_Size);
    // fill(0,0,255);
    // rect (width/2,height/2,rect_size);

    // ellipse_Size = ellipse_Size - 1;
    // rect_SSize=rect_Size=.000025;
    
}