import handleDelete from "../Delete/handleDelete";
import handleDone from "../Done/handleDone";

//! Function to show the created items to the DOM
const handleShowTasks = (taskArray) => {
  // target the ul element on the DOM
  const todoList = document.getElementById("todo_list_container");

  // clear the todoList before rendering the updated item. Clear the content of the todoList element. It removes all the tasks that were previously displayed on the page.
  todoList.innerHTML = "";

  // map over the array
  taskArray.map((task) => {
    //! create elements:
    const createTask = document.createElement(`li`);
    const createDeleteBtn = document.createElement(`button`);
    const createDoneBtn = document.createElement(`button`);

    //!create the text for the elements
    createTask.textContent = task.text;
    createDoneBtn.textContent = "done";
    createDeleteBtn.textContent = "delete";

    //! add to the ul
    todoList.appendChild(createTask);
    createTask.appendChild(createDoneBtn);
    createTask.appendChild(createDeleteBtn);

    //! add attributes to the elements
    // add id attribute to li to be shown on the DOM
    // createTask.setAttribute("id", `${task.id}`);
    createTask.setAttribute("data-li-id", `${task.id}`);
    createTask.classList.add("done");

    // add id attribute to the eletBtn to be shown on the DOM
    createDeleteBtn.setAttribute("buttonId", `${task.id}`);
    createDeleteBtn.addEventListener(`click`, () =>
      handleDelete(task.id, taskArray)
    );

    // add id attribute to the doneBtn to be shown on the DOM
    createDoneBtn.setAttribute("doneButtonId", `${task.id}`);
    // add and event parameter to the function
    createDoneBtn.addEventListener(`click`, (e) =>
      handleDone(createTask.getAttribute("data-li-id"), e)
    );
  });
};

export default handleShowTasks;
