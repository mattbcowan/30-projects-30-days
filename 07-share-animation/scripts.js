let cover = document.querySelector(".cover");

cover.addEventListener("click", function (e) {
  e.preventDefault();
  this.offsetWidth == 304
    ? this.classList.remove("animate-reverse")
    : this.classList.add("animate-reverse");
});
