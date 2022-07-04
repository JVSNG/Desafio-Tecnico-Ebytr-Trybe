import express from 'express';
import 'dotenv/config';
import taskController from './controller/taskController';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Rotas: get/tasks, post/tasks. delete/tasks/:id, put/tasks/:id');
});

app.get('/tasks', taskController.getAll);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});