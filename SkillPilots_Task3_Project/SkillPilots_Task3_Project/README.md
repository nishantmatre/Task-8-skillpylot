# SkillPilots - Task 3: Protected Notes Page

A beginner-friendly front-end demo implementing the task shown in the screenshot.

## Features
1. The notes page checks for an `authToken` when it loads.
2. If the token is missing, the user is redirected to `index.html` (login).
3. Successful demo login stores `authToken = loggedIn` and the username in `localStorage`.
4. The notes page displays the stored username.
5. Logout removes the token and username, then redirects to the login page.
6. A small notes field saves its text in browser `localStorage`.

## Run the project
1. Extract the ZIP file.
2. Open the extracted `SkillPilots_Task3_Project` folder.
3. Double-click `index.html` to open it in a browser.
4. Enter any non-empty username and password, then click **Login**.
5. The protected Notes page opens. Click **Logout** to clear the token.
6. To test route protection, open `notes.html` after logging out. It should redirect to the login page.

## Files
- `index.html` - login page
- `login.js` - demo login and token creation
- `notes.html` - protected notes page
- `notes.js` - route guard, username display, logout, and note saving
- `style.css` - page styling

## Important note
This is a learning/demo project. It uses browser `localStorage` and a mock login, not a secure server-side authentication system. Do not use it to protect real accounts or sensitive information.
