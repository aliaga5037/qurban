let inputs = document.getElementById("task-input");
const list = document.getElementById("task-list");
const form = document.getElementById("task-form");
const list2 = document.getElementById("task-list2");
const form2 = document.getElementById("task-form2");
let inputs2 = document.getElementById("task-input2");

function postTask() {
  const listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  let buttonCheckbox = generateBtnCheckbox(checkBox);

  listItem.innerText = inputs.value;
  listItem.appendChild(checkBox);
  listItem.appendChild(buttonCheckbox);
  list.appendChild(listItem);
}

const finishTask = (e) => {
  const listItem = e.target.parentElement;
  const checkBox = listItem.querySelector("input[type=checkbox]");
  if (!checkBox.checked) {
    alert("Please check the checkbox first");
    return;
  }
  checkBox.disabled = true;
  listItem.style.textDecoration = "line-through";
  listItem.style.color = "grey";
  e.target.remove();
  checkBox.remove();

  list.appendChild(redactButt);
};

const generateBtnCheckbox = () => {
  const btn = document.createElement("input");
  btn.classList.add("btnCheck");

  btn.setAttribute("type", "submit");
  btn.addEventListener("click", finishTask);

  return btn;
};

form.addEventListener("submit", (e) => {
  if (inputs.value === "") {
    alert("Please enter a task");
    return;
  }
  e.preventDefault();
  postTask();
  displayText();
});

function displayText() {
  inputs.value = "new task";
}

let redactButt = document.createElement("input");
redactButt.setAttribute("type", "submit");
redactButt.value = "Redact";
redactButt.classList.add("btnCheck");

redactButt.addEventListener("click", change);

function change() {
  const inpLi = document.createElement("li");
  textform = document.createElement("form");
  textInp = document.getElementById("task-input2");
  redactButt.remove();
  inpLi.appendChild(textform);
  list2.appendChild(inpLi);
  textform.appendChild(textInp);
}
