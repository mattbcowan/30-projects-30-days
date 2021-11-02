let groceryItem = document.getElementById("grocery-item");
let listOfGroceries = document.getElementById("list-of-groceries");
let submitBtn = document.getElementById("submit-btn");
let listItems = document.querySelectorAll(".listItem");

submitBtn.onclick = () => {
  let node = document.createElement("li");
  node.className = "listItem";
  node.setAttribute("id", generateId());
  node.onclick = removeItem;
  node.appendChild(document.createTextNode(groceryItem.value));
  listOfGroceries.appendChild(node);
  listItems = document.querySelectorAll(".listItem");
  groceryItem.value = "";
};

let removeItem = (e) => {
  document.getElementById(e.srcElement.id).remove();
};

let generateId = () => {
  return Math.floor(Math.random() * 1000000000);
};
