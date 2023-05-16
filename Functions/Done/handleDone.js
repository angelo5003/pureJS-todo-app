//! function for toggling between done and not done. The dataId is the argument that has the value of the data-li-id attribute that was passed to the function when it was called. The e argument is the event object that was generated when the done button was clicked
const handleDone = (dataId, e) => {
  // Get the parentElement of the done button (which is the li element)
  const liElement = e.target.parentElement;

  // Toggle the success class on the li element when clicked on the done button
  liElement.classList.toggle("success");
};

export default handleDone;
