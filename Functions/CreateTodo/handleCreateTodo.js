import { v4 as uuid } from "uuid";
import handleDelete from "../Delete/handleDelete";

const handleCreateTodo = (taskArray, todoInputValue) => {
  // target the parent of the li (ul)
  const todoListContainer = document.getElementById("todo_list_container");
  // create li
  const createTodoItem = document.createElement(`li`);
  // create a deleteBtn
  const createDeleteBtn = document.createElement(`button`);
  // set the text for the created items
  createTodoItem.textContent = `${todoInputValue}`;
  createDeleteBtn.textContent = "delete";

  // create the new object to be added to the array
  const newTodo = {
    id: uuid(),
    text: todoInputValue,
  };

  // add a id attribute on the dynamic created li
  createTodoItem.setAttribute("id", `${newTodo.id}`);

  // add a id attribute on the dynamic created deleteBtn
  createDeleteBtn.setAttribute("buttonId", `${newTodo.id}`);
  createDeleteBtn.addEventListener(`click`, () =>
    handleDelete(newTodo.id, taskArray)
  );

  // add to the ul
  todoListContainer.appendChild(createTodoItem);
  createTodoItem.appendChild(createDeleteBtn);

  // create a new array called newTaskArray with the copied existing taskArray, and add the newTodo object to it
  const newTaskArray = [...taskArray, newTodo];

  console.log(`taskArray`, newTaskArray);
  return newTaskArray; // return the updated array
};

export default handleCreateTodo;
