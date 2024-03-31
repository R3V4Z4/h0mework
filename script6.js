"use strict"

// to do list

let inputElement = document.getElementById("inputField");
let btnClick = document.getElementById("clickButton");
let ulList = document.getElementById("list-items");
let clearButton = document.getElementById("clearAll");
let form = document.getElementById("formElement");
let clearValue = document.getElementById("clearValue")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = inputElement.value;

  if (inputValue !== "") {
    let li = document.createElement("li");
    li.textContent = inputValue;

   let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete This Item";
    btnDelete.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(btnDelete);
    ulList.appendChild(li);

    inputElement.value = "";
  } else {
    inputElement.placeholder = "enter something";
  }
});

clearButton.addEventListener("click", function () {
  ulList.innerHTML = " ";
})
clearValue.addEventListener("click", function() {
  inputElement.value = " ";
})

// burger bar

let burger = document.getElementById("burgerBar");
let menu = document.getElementById("navBar");

burger.addEventListener("click", function () {
  burger.classList.toggle("isactive");
  menu.classList.toggle("isactive");
});


