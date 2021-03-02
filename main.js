let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//Add Item
const addItem = (e) => {
  e.preventDefault();

  //get input
  let item = document.getElementById("item").value;

  //making the list element
  let itemElement = document.createElement("li");
  itemElement.className = "list-group-item";
  itemElement.textContent = item;

  //making delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.textContent = "x";

  //append delete btn to item
  itemElement.appendChild(deleteBtn);

  //append item to item list
  itemList.appendChild(itemElement);

  document.getElementById("item").value = "";
};

//delete item
const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      console.log(e.target.classList);
      let itemToRemove = e.target.parentElement;
      itemList.removeChild(itemToRemove);
    }
  }
};

//filter item
const filterItem = (e) => {
  let filterTerm = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    if (item.firstChild.textContent.toLowerCase().indexOf(filterTerm) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  console.log(items);
};

//from submit event
form.addEventListener("submit", addItem);

//delete button click event
itemList.addEventListener("click", removeItem);

//filter input evetn
filter.addEventListener("input", filterItem);
