/* EXERCISE 5: 
          Add a new task to the list.
          Suggestion:
          - Use document.getElementById to get the UL item and the input text
          - Use the document.createElement to create the new List Item
          - Append the child to the UL
      */

let addTask = document.getElementById("add");
let container = document.getElementById("myTaskList");
let input = document.getElementById("newTask");
let removeOne = document.getElementById("removefirst");
let removeSon = document.getElementById("removelast");

addTask.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = input.value;
  container.appendChild(li);
  input.value = "";
});

/* EXERCISE 6: 
          Create a method "removeLast" which removes the last item from the task list
      */

removeSon.addEventListener("click", function () {
  let cocuk = container.children;
  if (cocuk[0]) {
    cocuk[cocuk.length - 1].remove();
  }
});

/* EXERCISE 7: 
          Create a method "removeFirst" which removes the first item from the task list
      */

removeOne.addEventListener("click", function () {
  let cocuk = container.children;
  if (cocuk[0]) cocuk[0].remove();
});

/* EXERCISE 8: 
          Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
      */

/* EXERCISE 9:
          Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
          onchange event listener ad applies it as background to every list item
      */

/* EXTRA */

/* EXERCISE 10: 
          Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
      
          Use your spare time to beautify your task list with CSS.

          Suggestion:
          - Break the code into many function for semplicity 
          - Reuse the functions previously created
      */
