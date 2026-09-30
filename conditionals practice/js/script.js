/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let creature = {
    x:150,
    y:150,
    w:120,
    h:120,
    eye:{
        fillColor:"#e8e4e4",
        size:120/3.5,
        center_x:150,
        center_y:150,
    },
    fillStates:{
        happy:"#b03cd6",
        sad:"#34d68d",
        angry:"#d76b22",
        neutral:"#e2d114"
    },
    currentFill:"#e2d114"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    push();
    //body
    fill(creature.currentFill);
    ellipse(creature.x,creature.y,creature.w,creature.h);
    
    fill(creature.eye.fillColor);
    //left eye
    ellipse(creature.eye.center_x, creature.eye.center_y, creature.eye.size, creature.eye.size);
    //right eye
    ellipse(creature.eye.center_x, creature.eye.center_y, creature.eye.size, creature.eye.size);

    pop();

}