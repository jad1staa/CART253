/**
 * Shy Circle
 * Jad Nami
 *
 * A circle that tries to escape when the mouse gets too close.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

const circle = {
  x: 300,
  y: 200,
  size: 50,
  fill: "#ff0000"
};

function setup() {
    createCanvas(400, 400);

}


/**
 *  Moves the circle away from the mouse when it gets too close
*/
function draw() {
    background("#aaaaaa");

    let distance = dist(mouseX, mouseY, circle.x, circle.y);

    if (distance < 100) {
        if (mouseX < circle.x) {
        circle.x = circle.x + 2;
        }

        else {
        circle.x = circle.x - 2;
        }

        if (mouseY < circle.y) {
        circle.y = circle.y + 2;
        }

        else {
        circle.y = circle.y - 2;
        }
    }

    fill(circle.fill);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);

}