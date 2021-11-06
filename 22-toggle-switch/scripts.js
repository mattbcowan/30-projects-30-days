let slider = document.getElementById("slider");
let background = document.querySelector("body");

let toggleDarkmode = () => {
  if (slider.checked) {
    background.classList.add("darkmode");
  } else {
    background.classList.remove("darkmode");
  }
};

toggleDarkmode();
