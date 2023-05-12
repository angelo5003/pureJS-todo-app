import { v4 as uuid } from "uuid";

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
  // add the li to the ul
  todoListContainer.appendChild(createTodoItem);
  createTodoItem.appendChild(createDeleteBtn);

  const newTodo = {
    id: uuid(),
    text: todoInputValue,
  };

  // create a new array with the existing taskArray and the newTodo object
  const newTaskArray = [...taskArray, newTodo];

  console.log(`taskArray`, newTaskArray);
  return newTaskArray;
};

export default handleCreateTodo;
