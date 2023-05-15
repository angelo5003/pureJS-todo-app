//! Function to show the created items to the DOM
const handleShowTasks = (taskArray) => {
  const todoList = document.getElementById("todo_list_container");

  // map over the localStorage array
  taskArray.map((task) => {
    const createTask = document.createElement(`li`);
    createTask.textContent = task.text;
    todoList.appendChild(createTask);
  });
  console.log(`taskArray in showTask:`, taskArray);
};

export default handleShowTasks;
