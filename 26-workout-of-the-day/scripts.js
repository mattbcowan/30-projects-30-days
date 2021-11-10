let progress = document.getElementById("progress");
let day = document.getElementById("day");
let routine = document.getElementById("routine");
let workout = document.querySelector(".workout");
progress.style.width = "0%";

let animated = () => {
  setTimeout(() => {
    day.innerHTML = "01";
    routine.innerHTML = "RUNNING";
    progress.style.width = `20%`;
  }, 0);
  setTimeout(() => {
    day.innerHTML = "02";
    routine.innerHTML = "LIFTING";
    progress.style.width = `40%`;
  }, 2000);
  setTimeout(() => {
    day.innerHTML = "00";
    routine.innerHTML = "BREAK";
    progress.style.width = `0%`;
  }, 4000);
};

let startAnimation = () => {
  setInterval(animated, 6000);
};

animated();
startAnimation();
