// Form validation
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const address = this.address.value.trim();

  if (!name || !email || !address) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you! Your fruit order has been placed.");
  this.reset();
});

// To-Do List / Fruit Cart
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = ${task} <button class='remove' onclick='removeTask(this)'>Remove</button>;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
