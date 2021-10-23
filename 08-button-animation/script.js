let submit_btn = document.getElementById("submit");
let complete = document.getElementById("complete");

submit_btn.onclick = function () {
  animateButton();
  setTimeout(function () {
    revealSent();
  }, 1000);
};

function animateButton() {
  submit_btn.classList.add("animate");
}

function revealSent() {
  complete.classList.add("reveal");
  complete.classList.remove("no-display");
}
