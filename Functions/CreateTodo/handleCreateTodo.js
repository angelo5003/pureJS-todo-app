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

  // create the new object to be added to the array
  const newTodo = {
    id: uuid(),
    text: todoInputValue,
  };

  // add a id attribute on the dynamic created deleteBtn
  createDeleteBtn.setAttribute("id", `${newTodo.id}`);

  // add to the ul
  todoListContainer.appendChild(createTodoItem);
  createTodoItem.appendChild(createDeleteBtn);

  // console.log(`deleteBtn:`, createDeleteBtn);

  // create a new array with the existing taskArray and the newTodo object
  const newTaskArray = [...taskArray, newTodo];

  console.log(`taskArray`, newTaskArray);
  return newTaskArray; // return the updated array
};

export default handleCreateTodo;
