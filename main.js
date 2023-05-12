import "./style.css";
import handleCreateTodo from "./Functions/CreateTodo/handleCreateTodo";

// get the addTodoBtn
const addTodoBtn = document.getElementById("add_todo_btn");
// get the todoInput
const todoInput = document.getElementById("todo_input_field");
// get the form
const resetTodoInput = document.getElementById("todo_form"); // target the form
// default value of the input
let todoInputValue = "";

// array where we will store the todo's in
let taskArray = [];

//! function for handling the input field
const handleInput = (e) => {
  // assign the value to the variable
  todoInputValue = e.target.value;
};
todoInput.addEventListener(`input`, handleInput);

//! master function that take care of multiple things when you click the add todo btn
const handleAdd = (e) => {
  // function for adding todo's
  taskArray = handleCreateTodo(taskArray, todoInputValue); // assign the returned value of handleCreateTodo to the taskArray variable and than call the handleShowTasks to show the updated list to the DOM

  // prevent the form from refreshing the browser everytime we add a new todo
  e.preventDefault();
  // reset the form to a empty string after adding a todo
  resetTodoInput.reset();
};
addTodoBtn.addEventListener(`click`, handleAdd);
