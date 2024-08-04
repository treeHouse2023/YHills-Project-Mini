document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Get and trim the input

  if (taskText === "") {
    alert("Please Enter a Task"); // Alert if input is empty
    return; // Exit the function if input is not valid
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li"); // Create a new list item
  const taskSpan = document.createElement("span"); // Create a span for the task text
  taskSpan.textContent = taskText; // Set the span's text to the input
  li.appendChild(taskSpan); // Add the span to the list item

  // Create Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editTask(li, taskSpan));
  li.appendChild(editButton); // Add edit button to the list item

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteTask(li));
  li.appendChild(deleteButton); // Add delete button to the list item

  taskList.appendChild(li); // Add the list item to the task list
  taskInput.value = ""; // Clear the input field
}

function editTask(li, taskSpan) {
  const taskText = taskSpan.textContent; // Get current task text
  const input = document.createElement("input"); // Create an input field
  input.type = "text";
  input.value = taskText; // Set input field value to current task text

  const saveButton = document.createElement("button"); // Create a save button
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    const newText = input.value.trim(); // Get new text
    if (newText !== "") {
      taskSpan.textContent = newText; // Update task text
      li.replaceChild(taskSpan, input); // Replace input with updated span
      li.replaceChild(editButton, saveButton); // Replace save button with edit button
    }
  });

  const editButton = li.querySelector("button:first-of-type"); // Get existing edit button
  li.replaceChild(input, taskSpan); // Replace task text with input field
  li.replaceChild(saveButton, editButton); // Replace edit button with save button
}

function deleteTask(li) {
  li.remove(); // Remove the list item
}
