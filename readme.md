# To Do List

A task management app built as part of The Odin Project. Users can create tasks, organize them by project, filter tasks by project, delete tasks, and persist data with `localStorage`.

## Features

- Create todos with:
  - title
  - description
  - due date
  - priority
  - project
  - completion status
- Default project support
- Create and assign projects
- Filter todos by project
- Delete todos
- Save tasks and projects with `localStorage`
- Edit task UI started

## Built With

- HTML
- CSS
- JavaScript
- Web Storage API (`localStorage`)

## What I Practiced

- Factory/module-style app structure
- Separating application logic from DOM logic
- Dynamic DOM rendering
- Form validation
- Event handling
- Persisting state with `localStorage`

## Project Structure

- `index.html` – app layout and forms
- `style.css` – styling
- `main.js` – app logic, rendering, event listeners, and storage

## Current Limitations / Future Improvements

- Finish the edit task workflow
- Improve CSS and overall UI polish
- Reduce coupling between event listeners and rendering logic
- Refactor some functions into cleaner controller/helper patterns
- Add better filtering options
- Use `date-fns` for date formatting

## Lessons Learned

This project helped me get more comfortable with:
- managing state in JavaScript
- rendering lists dynamically
- handling form data
- debugging DOM issues
- saving and loading data from `localStorage`

## How to Run

1. Clone the repo
2. Open the project in your editor
3. Launch `index.html` with Live Server or another local development server

## Author

Built by Reginald Osakue
