import Task from '../database/models/Task';

const getAll = async (): Promise<Task[]> => {
  const tasks = await Task.findAll();
  if (tasks) {
    return tasks;
  }
  throw new Error('Internal Server Error');
};

const create = async (task: Task): Promise<Task> => {
  const createdAt = Date.now();
  const newTask = await Task.create({
    ...task,
    status: 'pendente',
    createdAt,
  });
  if (newTask) {
    return newTask;
  }
  throw new Error('Internal Server Error');
}

const deleteTask = async (id: number): Promise<number> => {
  const deletedRows = await Task.destroy({
    where: {
      id,
    },
  });
  if (deletedRows) {
    return deletedRows;
  }
  throw new Error('Internal Server Error');
}

const updateTask = async (id: number, task: Task): Promise<number> => {
  const taskExists = await Task.findOne({
    where: {
      id,
    },
  });
  if (taskExists) {
    const updatedTask = await Task.update({
      ...task,
    }, {
      where: {
        id,
      }
    });
    if (updatedTask) {
      return updatedTask[0];
    }
  }
  throw new Error('Internal Server Error');
};

const startTask = async (id: number): Promise<string> => {
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  if (task) {
    const updatedTask = await Task.update({
      status: 'Em andamento',
    }, {
      where: {
        id,
      }
    });
    if (updatedTask) {
      return task.title;
    }
  }
  throw new Error('Internal Server Error');
}

const finishTask = async (id: number): Promise<string> => {
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  if (task) {
    const updatedTask = await Task.update({
      status: 'Pronto',
    }, {
      where: {
        id,
      }
    });
    if (updatedTask) {
      return task.title;
    }
  }
  throw new Error('Internal Server Error');
};

export default {
  getAll,
  create,
  deleteTask,
  updateTask,
  startTask,
  finishTask,
};