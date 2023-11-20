
Pursuit 10.1 Project : Study-Buddy Backend
Introduction

This project, "Pursuit 10.1," is a comprehensive web application developed by Xavier Rice. It aims to provide a user-friendly platform for organizing and managing resources related to learning pursuits at Pursuit. The application facilitates the creation of user profiles, note-taking functionalities, and seamless management of  RESTful resources  for effective learning experiences. Visit now! [https://studybuddyx.netlify.app/]

RESTful Routes
Users
GET /user
Description: Retrieves a list of all users.
Response: Array of user objects.

GET /user/:id
Description: Retrieves a specific user by ID.
Response: User object corresponding to the provided ID.

POST /user
Description: Creates a new user.
Request Body: User information.
Response: Newly created user object.

DELETE /user/:id
Description: Deletes a specific user by ID.
Response: Success message confirming the deletion.

Notes
GET /user/:id/notes
Description: Retrieves all notes associated with a specific user.
Response: Array of note objects belonging to the user.

GET /user/:id/notes/:note_id
Description: Retrieves a specific note associated with a user by note ID.
Response: Note object corresponding to the provided ID.

POST /user/:id/notes
Description: Creates a new note associated with a specific user.
Request Body: Note information.
Response: Newly created note object.

DELETE /users/:id/notes/:note-id
Description: Deletes a specific note associated with a user by note ID.
Response: Success message confirming the deletion of the note.


Getting Started
To get started with this project:

Clone the repository.
Install necessary dependencies using npm install.
Set up the database and configure environment variables.
Run the backend server using npm start.

