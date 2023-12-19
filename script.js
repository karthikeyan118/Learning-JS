const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// add eventlistener

const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please enter an item");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("one two");
  li.appendChild(button);
  itemList.appendChild(li);
};
const createButton = (classes) => {
  const btn = document.createElement("button");
  btn.className = classes;
  btn.appendChild(createIcon("fa-solid fa-xmark"));
  return btn;
};
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};
itemForm.addEventListener("submit", addItem);
