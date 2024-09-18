document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTask");
  const newTaskInput = document.getElementById("newTask");
  const tasksList = document.getElementById("tasks");

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = taskText;
      li.appendChild(textSpan);

      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.onclick = function () {
        editTask(textSpan);
      };

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remover";
      removeButton.onclick = function () {
        this.parentNode.remove();
      };

      li.appendChild(editButton);
      li.appendChild(removeButton);
      tasksList.appendChild(li);
      newTaskInput.value = "";
    }
  }

  function editTask(taskSpan) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;
    taskSpan.parentNode.replaceChild(input, taskSpan);
    input.focus();

    input.addEventListener("blur", function () {
      taskSpan.textContent = this.value;
      input.parentNode.replaceChild(taskSpan, input);
    });

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        taskSpan.textContent = this.value;
        input.parentNode.replaceChild(taskSpan, input);
      }
    });
  }

  addTaskButton.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
