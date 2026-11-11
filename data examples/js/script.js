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

let flowerOne = {
    x: 100,
    width: 20,
    height: 150,
    y: 500 - 150,
    petalWidth: 75,
    fillStem: "DarkMagenta",
    strokePetal: "DarkTurquoise",
    fillPetal: "HotPink",

};

let flowerTwo = {
    x: 200,
    width: 20,
    height: 80,
    y: 500 - 80,
    petalWidth: 50,
    fillStem: "DarkMagenta",
    strokePetal: "DarkTurquoise",
    fillPetal: "HotPink",
};

let flowerThree = {
    x: 350,
    width: 20,
    height: 120,
    y: 500 - 120,
    petalWidth: 90,
    fillStem: "DarkMagenta",
    strokePetal: "DarkTurquoise",
    fillPetal: "HotPink",
};


function setup() {

    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("DodgerBlue");
    //stem
    push();
    noStroke();
    fill(flowerOne.fillStem);
    rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.height);
    pop();
    //petal
    push();
    strokeweight(4);
    stroke(flowerOne.strokePetal);
    fill(flowerOne.fillPetal);
    ellipse (flowerOne.x + flowerOne.width/2, 
        flowerOne.y-flowerOne.petalWidth/2, 
        flowerOne.petalWidth,
        flowerOne.petalWidth);
    pop();

     //stem
    push();
    noStroke();
    fill(flowerTwo.fillStem);
    rect(flowerTwo.x, flowerTwo.y, flowerTwo.width, flowerTwo.height);
    pop();
    //petal
    push();
    strokeweight(4);
    stroke(flowerTwo.strokePetal);
    fill(flowerTwo.fillPetal);
    ellipse (flowerTwo.x + flowerTwo.width/2, 
        flowerTwo.y-flowerTwo.petalWidth/2, 
        flowerTwo.petalWidth,
        flowerTwo.petalWidth);
    pop();

     //stem
    push();
    noStroke();
    fill(flowerThree.fillStem);
    rect(flowerThree.x, flowerThree.y, flowerThree.width, flowerThree.height);
    pop();
    //petal
    push();
    strokeweight(4);
    stroke(flowerThree.strokePetal);
    fill(flowerThree.fillPetal);
    ellipse (flowerThree.x + flowerThree.width/2, 
        flowerThree.y-flowerThree.petalWidth/2, 
        flowerThree.petalWidth,
        flowerThree.petalWidth);
    pop();
    


}