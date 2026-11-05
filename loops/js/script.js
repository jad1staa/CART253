/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let startcolor = undefined;
let endcolor = undefined;
let gradientIndex = 0;

// let clownImage = undefined;
let xPos = 0;

let x = 20;
let y = 250;
let imageWidth =40;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);
startcolor = color(0, 0, 255);
endcolor = color(255, 0, 0);
    // clownImage = await loadImage("clown.png");
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background  ('skyblue');
    gradientIndex = 0;
    y=0;
    while(gradientIndex<1){
        let rectColor = 
        lerpColor(startcolor,endcolor,gradientIndex);
        noStroke();
        fill(rectColor);
        rect(0,y,width,2);
        //change color to next color
        gradientIndex +=0.004;
        //change y according to height of rect
        y+=2
    }
    //     x=20;
    //     y=20;
    //     while(x<width){
    //         image(clowinImage,x,y,imageWidth,imageWidth); 
            
    //     }
    //     while(y<height){
   //          image(clownImage,x,y,imageWidth,imageWidth);
   //          y=y+imageWidth;
   //      }

   //      x=x+imageWidth
   //      y=20;


}