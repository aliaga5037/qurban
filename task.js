let inputs = document.getElementById("task-input");
const list = document.getElementById("task-list");
const form = document.getElementById("task-form");

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

  let redactButt = document.createElement("input");
  redactButt.setAttribute("type", "submit");
  redactButt.value = "Redact";
  redactButt.classList.add("btnCheck");
  redactButt.addEventListener("click", change);

  listItem.appendChild(redactButt);
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

function save(element, value) {
  element.innerText = value;
}

function change(event) {
  // event: {
  //  target: Node
  // }
  // 1. Change Redact to save
  // 2. Add input set value to task name
  // 3. OnSave Change task to new task
  const target = event.target;
  const listItem = target.parentElement;
  listItem.style.textDecoration = "none";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.value = listItem.innerText;
  listItem.innerText = '';
  target.value = "Save";
  listItem.appendChild(input);
  listItem.appendChild(target);
  target.removeEventListener("click", change);
  target.addEventListener("click", () => save(listItem, input.value));
}
