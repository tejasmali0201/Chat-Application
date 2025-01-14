# Chat-Application

#Overview
A real-time chat application that allows users to register, log in, and communicate with other registered users. The application uses a Spring Boot backend, WebSocket for real-time messaging, and a responsive frontend.

#Features
User Authentication:
Sign up and log in functionality.
User credentials stored securely in the database.
User List:
Collapsible left menu displaying all registered users.
Real-Time Chat:
Initiate chats with other users.
Messages delivered instantly using WebSocket.
Message Persistence:
Chat messages stored in a database and retrieved on demand.
Responsive Interface:
Optimized for both desktop and mobile devices.

#Technologies Used
Backend: Spring Boot (Java), WebSocket, JPA (Hibernate)
Frontend: HTML, CSS, JavaScript
Database: H2 (in-memory)

#Setup and Execution

Backend (Spring Boot)

Navigate to the Backend Directory:
Ensure you're in the Spring Boot project's root directory (where pom.xml resides).

Build and Run the Backend:

Build the project:

mvn clean install

Run the Spring Boot application:

mvn spring-boot:run

The backend will be available at http://localhost:8080.

Frontend (React)

Navigate to the Frontend Directory:
Ensure you're in the frontend React project's root directory (where package.json resides).

Install Dependencies:

npm install

Run the Frontend:
Start the React development server:

npm start

The application will open in your browser at http://localhost:3000.

Accessing the Application

Open http://localhost:3000 in your browser.

Sign up with a new user account.

Log in to view the list of registered users in the collapsible left menu.

Select a user to start a chat. Messages will load in real-time, and past messages will be displayed.
