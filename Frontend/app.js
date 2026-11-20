const API_URL = 'http://localhost:5000/api/todos';

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todo.title}</span> <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>`;
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById('todoInput');
  const title = input.value.trim();
  if (!title) return alert('Type something first');
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  input.value = '';
  loadTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadTodos();
}

loadTodos();