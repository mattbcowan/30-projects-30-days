let thumbnail = document.querySelector(".thumbnail");
let fullCard = document.getElementById("full-card");

thumbnail.addEventListener("mouseenter", () => {
  thumbnail.classList.add("hide");
  fullCard.classList.remove("hidden");
  fullCard.classList.add("fadeIn");
  setTimeout(() => {
    thumbnail.classList.add("hidden");
  }, 100);
});

fullCard.addEventListener("mouseleave", () => {
  thumbnail.classList.remove("hide");
  thumbnail.classList.remove("hidden");
  fullCard.classList.remove("fadeIn");
  fullCard.classList.add("hidden");
});
