import { v4 as uuid } from "uuid";
const todoId = uuid();
console.log(`todoId:`, todoId);

const handleCreateTodo = (taskArray, todoInputValue) => {
  console.log(`hello world from the createTodo function`, taskArray);
  const todoListContainer = document.getElementById("todo_list_container");
  const createTodoItem = document.createElement(`li`);
  createTodoItem.textContent = `${todoInputValue}`;
  todoListContainer.appendChild(createTodoItem);
};

export default handleCreateTodo;
