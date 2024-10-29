$(document).ready(function () {
  
  let tasks = [];

  function renderTasks() {
    $('#todo-list').empty();
    tasks.forEach((task, index) => {
      const taskElement = $(`
        <li>
          <span class="${task.completed ? 'complete' : ''}">${task.text}</span>
          <button class="delete" data-index="${index}">Delete</button>
          <button class="toggle-complete" data-index="${index}">
            ${task.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      `);
      $('#todo-list').append(taskElement);
    });
  }


  $('#todo-form').on('submit', function (e) {
    e.preventDefault();
    const taskText = $('#new-task').val().trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      $('#new-task').val('');
      renderTasks();
    }
  });

  $('#todo-list').on('click', '.toggle-complete', function () {
    const index = $(this).data('index');
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  });

  $('#todo-list').on('click', '.delete', function () {
    const index = $(this).data('index');
    tasks.splice(index, 1);
    renderTasks();
  });

  renderTasks();
});

  