// Mock login: stores a demo token after checking non-empty credentials.
const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    message.textContent = 'Please enter both username and password.';
    return;
  }

  localStorage.setItem('authToken', 'loggedIn');
  localStorage.setItem('username', username);
  window.location.href = 'notes.html';
});
