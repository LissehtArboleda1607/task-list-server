const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog',
  },
  // Puedes agregar más tareas aquí
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});