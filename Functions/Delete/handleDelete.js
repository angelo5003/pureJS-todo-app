import handleShowTasks from "../Show/handleShowTasks";

//!function for deleting items from the array
const handleDelete = (id, taskArray) => {
  console.log(`hello from the handleDelete function with buttonId:`, id);
  let filteredArray = taskArray.filter((task) => task.id !== id);

  // Update localStorage with filteredArray. Turn the new filteredArray to a string and add to localStorage
  localStorage.setItem("todo", JSON.stringify(filteredArray));

  // call the handleShowTasks with the updated taskArray after deletion
  handleShowTasks(filteredArray);
  console.log(`filteredArray:`, filteredArray);

  return filteredArray; // return the updated array
};

export default handleDelete;
