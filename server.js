const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like CSS, JS) from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));
//
// // Array to hold the To-Do items
// let todos = [];
//
// // Route to get all To-Do items
// app.get('/todos', (req, res) => {
//     res.json(todos);
//     });
//
//     // Route to add a new To-Do item
//     app.post('/todos', express.json(), (req, res) => {
//         const todo = req.body.todo;
//             if (todo) {
//                     todos.push(todo);
//                             res.status(201).json({ message: 'Todo added successfully!' });
//                                 } else {
//                                         res.status(400).json({ message: 'Todo is required!' });
//                                             }
//                                             });
//
//                                             // Serve the HTML page
//                                             app.get('/', (req, res) => {
//                                                 res.sendFile(path.join(__dirname, 'index.html'));
//                                                 });
//
//                                                 // Listen on port 3000
//                                                 app.listen(3000, () => {
//                                                     console.log('Server is running on http://localhost:3000');
//                                                     });
//
