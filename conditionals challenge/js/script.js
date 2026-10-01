/**
 * Circle Master
 * Jad Nami
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
  x: 300,
  y: 200,
  size: 100,
  fill: "#00ff00"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  movePuck();
  checkTarget();

  // Draw the user and puck
  drawUser();
  drawPuck();
  drawTarget();
}

    /**
    * Moves the puck when the user touches it
    */
    function movePuck() {
     let distance = dist(user.x, user.y, puck.x, puck.y);

    if (distance < user.size / 2 + puck.size / 2) {
     puck.x = puck.x + 2;
  }
}
  

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

/**
 * Displays the target circle
 */
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}

/**
 * Checks if the puck is overlapping the target
 */
function checkTarget() {
  let distance = dist(puck.x, puck.y, target.x, target.y);

  if (distance < puck.size / 2 + target.size / 2) {
    target.fill = "#00ff00";
  }
  else {
    target.fill = "#ff0000";
  }
}