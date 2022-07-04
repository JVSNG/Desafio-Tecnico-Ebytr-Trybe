import express from 'express';
import taskController from './controller/taskController';

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Rotas: get/tasks, post/tasks. delete/tasks/:id, put/tasks/:id');
});

app.post('/tasks', taskController.create);

app.get('/tasks', taskController.getAll);

app.delete('/tasks/:id', taskController.deleteTask);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});