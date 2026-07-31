let input = document.getElementById("new-task");
let enterTask = document.getElementById("enterTask");
let tasks = [];

function displayTask() {

  enterTask.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    enterTask.innerHTML += `<li class="todo">
          <span class="todo__text"> ${tasks[i]} </span>
          <div class="todo__actions">
            <button type="button" class="icon-btn" aria-label="Edit task" onclick="editTask(${i})">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </button>
            <button type="button" class="icon-btn icon-btn--danger" aria-label="Delete task" onclick="deleteOne(${i})">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6" />
              </svg>
            </button>
          </div>
        </li>`


  }
}

function addTask() {

  let task = input.value;

  if (task !== "") {
    tasks.push(task)

    input.value = "";

  } else {
    alert("Plzz Enter a Task")
  }
  displayTask()
}


function deleteOne(index) {
  tasks.splice(index, 1);
  displayTask()
}

function editTask(index) {
  let userEdit = prompt("Edit Your Task", tasks[index]);
  tasks[index] = userEdit
  displayTask()
}

function resetTask() {
  input.value = "";
  displayTask()
}

function deleteTask() {
  tasks = [];
  displayTask()
}
