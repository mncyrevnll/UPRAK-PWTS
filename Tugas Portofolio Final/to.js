function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✅";
    doneBtn.onclick = function () {
      li.classList.toggle("completed");
    };

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = function () {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      input.classList.add("edit-input");

      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          span.textContent = input.value;
          li.replaceChild(span, input);
        }
      });

      li.replaceChild(input, span);
      input.focus();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function () {
      li.remove();
    };

    actions.appendChild(doneBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}
