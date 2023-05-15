import handleDelete from "../Delete/handleDelete";

//! Function to show the created items to the DOM
const handleShowTasks = (taskArray) => {
  const todoList = document.getElementById("todo_list_container");

  // clear the todoList before rendering the updated item. Clear the content of the todoList element. It removes all the tasks that were previously displayed on the page.
  todoList.innerHTML = "";
  // map over the localStorage array
  taskArray.map((task) => {
    const createTask = document.createElement(`li`);
    const createDeleteBtn = document.createElement(`button`);
    createTask.textContent = task.text;
    createDeleteBtn.textContent = "delete";
    todoList.appendChild(createTask);
    createTask.appendChild(createDeleteBtn);

    // add id attribute to the dynamic li to be shown on the DOM
    createTask.setAttribute("id", `${task.id}`);

    // add id attribute to the dynamic deletBtn to be shown on the DOM
    createDeleteBtn.setAttribute("buttonId", `${task.id}`);
    createDeleteBtn.addEventListener(`click`, () =>
      handleDelete(task.id, taskArray)
    );
  });
};

export default handleShowTasks;
