// Route guard: redirect to login if no token is present.
const token = localStorage.getItem('authToken');
if (!token) {
  window.location.href = 'index.html';
} else {
  document.getElementById('user-name').textContent =
    localStorage.getItem('username') || 'Student';
}

// Logout clears the token and username, then returns to login.
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('username');
  window.location.href = 'index.html';
});

// Small demo note saver (browser localStorage).
const noteBox = document.getElementById('note');
const saveMessage = document.getElementById('save-message');
noteBox.value = localStorage.getItem('studentNote') || '';

document.getElementById('save-btn').addEventListener('click', () => {
  localStorage.setItem('studentNote', noteBox.value);
  saveMessage.textContent = 'Note saved in this browser.';
});
