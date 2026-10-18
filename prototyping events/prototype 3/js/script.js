/**
 * Don't Leave Me
 * Author: Jad Nami
 *
 * The sketch notices when you switch browser tabs.
 */

"use strict";

let message = "Hey! Stay with me ❤️";
let backgroundColor = "lightblue";


/**
 * Displays the current message.
 */
function draw() {
  background(backgroundColor);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  text(message, width / 2, height / 2);
}

/**
 * Reacts when the browser tab becomes hidden or visible.
 */
function setupVisibilityEvent() {
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      message = "Where are you going? 🥲";
      backgroundColor = "pink";
    } else {
      message = "You're back! ❤️";
      backgroundColor = "lightblue";

      setTimeout(function () {
        message = "Hey! Stay with me ❤️";
      }, 2000);
    }
  });
}

function setup() {
  createCanvas(400, 400);
  setupVisibilityEvent();
}