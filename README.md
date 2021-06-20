# What is this aplication

This site is a basic task organizer. You can write and group each task with individual category and dates. It will help you manage all your work everyday.

## Features

This application allows you to login on your own profile. You can add your own tasks in a specific day. Tasks are grouped by type (work, personal, fitness, other). In application we have the ability to assign a task to a project. As additional activities, You can overwrite the task at any time, delete and finish it.

## Tech

I used MERN STACK which comprises 4 technologies which name are: MongoDB, Express, React and Node.js

## Site project

http://localhost:3001/

## Installation

Install the dependencies on backend server.

```
cd backend
npm i
```

Create mongodb cluster on https://www.mongodb.com/

Add file .env on folder backend

```
DB_CONNECTION=”connection link to mongodb”
TOKEN_SECRET=”your words on token"
```

Start server backend

```
npm start
```

Install the dependencies on frontend server

```
cd frontend
npm i
```

add file .env folder frontend

```
REACT_APP_ADDRESS=”http://localhost:3000”
```

Start server frontend

```
npm start
```

## License

MIT
