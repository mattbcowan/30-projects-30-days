let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  if (searchBar.classList.contains("hide")) {
    searchBar.classList.add("reveal");
    searchBar.classList.remove("hide");
    searchBar.classList.remove("disappear");
  } else {
    searchBar.classList.remove("reveal");
    searchBar.classList.add("disappear");
    setTimeout(() => {
      searchBar.classList.add("hide");
    }, 500);
  }
});
