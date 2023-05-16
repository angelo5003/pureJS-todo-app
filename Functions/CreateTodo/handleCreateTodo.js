import { v4 as uuid } from "uuid";
import handleDelete from "../Delete/handleDelete";
import handleDone from "../Done/handleDone";

//! function to create todo's
const handleCreateTodo = (taskArray, todoInputValue) => {
  // target the parent of the li (ul)
  const todoListContainer = document.getElementById("todo_list_container");

  //! create elements:
  // create li
  const createTodoItem = document.createElement(`li`);
  // create a deleteBtn
  const createDeleteBtn = document.createElement(`button`);
  // create a doneBtn
  const createDoneBtn = document.createElement(`button`);

  //!create the text for the elements
  //? set the text of a new li to the value of the input field
  createTodoItem.textContent = `${todoInputValue}`;
  //? set the text of the done button
  createDoneBtn.textContent = "done";
  //? set the text of the delete button to delete
  createDeleteBtn.textContent = "delete";

  //! create the new object to be added to the array
  const newTodo = {
    id: uuid(),
    text: todoInputValue,
  };

  //! add attributes to the elements
  // add a id attribute on the li
  createTodoItem.setAttribute("data-li-id", `${newTodo.id}`);
  createTodoItem.classList.add("done");

  // add a id attribute on the deleteBtn
  createDeleteBtn.setAttribute("buttonId", `${newTodo.id}`);
  createDeleteBtn.addEventListener(`click`, () =>
    handleDelete(newTodo.id, taskArray)
  );

  // add a id attribute to the done button
  createDoneBtn.setAttribute("doneButtonId", `${newTodo.id}`);
  // add and event parameter to the handleDone()
  createDoneBtn.addEventListener(`click`, (e) =>
    handleDone(createTodoItem.getAttribute("data-li-id"), e)
  );

  //! add to the ul
  todoListContainer.appendChild(createTodoItem);
  createTodoItem.appendChild(createDoneBtn);
  createTodoItem.appendChild(createDeleteBtn);

  // create a new array called newTaskArray with the copied existing taskArray, and add the newTodo object to it
  const newTaskArray = [...taskArray, newTodo];

  console.log(`taskArray`, newTaskArray);
  return newTaskArray; // return the updated array
};

export default handleCreateTodo;
