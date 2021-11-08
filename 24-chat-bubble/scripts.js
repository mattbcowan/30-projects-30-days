let bubbleText = document.getElementById("bubble-text");
let bubble = document.querySelector(".bubble");
let dotContainer = document.querySelector(".dot-container");
let dots = document.querySelector(".dot");

setTimeout(() => {
  dotContainer.parentElement.removeChild(dotContainer);
  dots.parentElement.removeChild(dots);
  bubbleText.innerHTML = "Hey! How can I help you?";
  bubble.classList.add("scaleToOne");
}, 2500);
setTimeout(() => {
  bubble.classList.add("scaleToZero");
}, 2000);
