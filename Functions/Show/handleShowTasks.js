import handleDelete from "../Delete/handleDelete";

//! Function to show the created items to the DOM
const handleShowTasks = (taskArray) => {
  const todoList = document.getElementById("todo_list_container");

  // map over the localStorage array
  taskArray.map((task) => {
    const createTask = document.createElement(`li`);
    const createDeleteBtn = document.createElement(`button`);
    createTask.textContent = task.text;
    createDeleteBtn.textContent = "delete";
    todoList.appendChild(createTask);
    createTask.appendChild(createDeleteBtn);

    // add id attribute to the dynamic li
    createTask.setAttribute("id", `${task.id}`);

    // add id attribute to the dynamic deletBtn
    createDeleteBtn.setAttribute("buttonId", `${task.id}`);
    createDeleteBtn.addEventListener(`click`, () => handleDelete(task.id));
  });
  console.log(`taskArray in showTask:`, taskArray);
};

export default handleShowTasks;
