import "./style.css";
import handleCreateTodo from "./Functions/CreateTodo/handleCreateTodo";
import handleShowTasks from "./Functions/Show/handleShowTasks";

const addTodoBtn = document.getElementById("add_todo_btn"); // target the add todo btn
const todoInput = document.getElementById("todo_input_field"); // target the input
const resetTodoInput = document.getElementById("todo_form"); // target the form

let todoInputValue = "";

const taskArray = []; // array where we store the data to

const handleInput = (e) => {
  todoInputValue = e.target.value;
};
todoInput.addEventListener(`input`, handleInput);

const handleAdd = (e) => {
  handleCreateTodo(taskArray, todoInputValue);
  e.preventDefault(); // prevent the form from refreshing the browser everytime we add a new todo
  resetTodoInput.reset(); // reset the form to a empty string after adding a todo
};
addTodoBtn.addEventListener(`click`, handleAdd);

handleShowTasks(taskArray); // show the tasks to the DOM
