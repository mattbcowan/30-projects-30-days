let mainMenuToggle = document.querySelector(".main-menu-toggle");
let mainMenuIcon = document.querySelector(".menu-icon");
let mainMenu = document.querySelector(".page-header-main");

mainMenuToggle.addEventListener("click", function () {
  if (mainMenuIcon.classList.contains("icofont-navigation-menu")) {
    mainMenuIcon.classList.remove("icofont-navigation-menu");
    mainMenuIcon.classList.add("icofont-ui-close");
    mainMenu.classList.add("visible");
  } else {
    mainMenuIcon.classList.remove("icofont-ui-close");
    mainMenuIcon.classList.add("icofont-navigation-menu");
    mainMenu.classList.remove("visible");
  }
});
