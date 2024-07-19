const tasks = [
    { id: 1, taskName: "Buy groceries", completed: false },
    { id: 2, taskName: "Vacuum the house", completed: false },
    { id: 3, taskName: "Walk the dog", completed: false },
  ];
  
  const inputTask = document.getElementById("newTask");
  const button = document.getElementById("addTask");
  const idList = document.getElementById("idList");
  const taskNameList = document.getElementById("taskNameList");
  const checkDelete = document.getElementById("checkDelete");
  const total = document.getElementById("totalTask");
  const completedTask = document.getElementById("completedTask");
  let id = tasks.length;
  
  const updateCounters = () => {
    total.textContent = tasks.length;
    completedTask.textContent = tasks.filter(task => task.completed).length;
  };
  
  const writeTasks = (arr) => {
    let newIdTask = "";
    let newNameTask = "";
    let newChecks = "";
    for (let obj of arr) {
      let isChecked = obj.completed ? "checked" : "";
      newNameTask += `<li class="${isChecked ? 'checked' : ''}">${obj.taskName} ${isChecked ? '✅' : ''}</li>`;
      newIdTask += `<li>${obj.id}</li>`;
      newChecks += `<div class="form-check">
        <input onclick="updateTask(${obj.id})" class="form-check-input" type="checkbox" value="" id="checkbox-${obj.id}" ${isChecked}>
        <label class="form-check-label" for="checkbox-${obj.id}">
        <p>|</p>
        </label>
        <a onclick="deleteTask(${obj.id})">❌</a>  
      </div>`;
    }
    idList.innerHTML = newIdTask;
    taskNameList.innerHTML = newNameTask;
    checkDelete.innerHTML = newChecks;
    updateCounters();
  };
  
  writeTasks(tasks);
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
    id += 1;
    const newTask = inputTask.value;
    tasks.push({ id: id, taskName: newTask, completed: false });
    inputTask.value = "";
    console.log(tasks);
    writeTasks(tasks);
  });
  
  const deleteTask = (id) => {
    const index = tasks.findIndex((element) => element.id == id);
    tasks.splice(index, 1);
    writeTasks(tasks);
  };
  
  const updateTask = (id) => {
    const checkbox = document.getElementById(`checkbox-${id}`);
    const index = tasks.findIndex((element) => element.id == id);
    tasks[index].completed = checkbox.checked;
    writeTasks(tasks);
  };
  