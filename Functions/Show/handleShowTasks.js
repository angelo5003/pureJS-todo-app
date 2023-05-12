const handleShowTasks = (taskArray) => {
  const todoList = document.getElementById("todo_list_container");
  taskArray.map((task) => {
    const createTask = document.createElement(`li`);
    createTask.textContent = task.text;
    todoList.appendChild(createTask);
  });
};

export default handleShowTasks;
