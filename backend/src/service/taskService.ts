import Task from '../database/models/Task';

const getAll = async (): Promise<Task[]> => {
  const tasks = await Task.findAll();
  if(tasks) {
    return tasks;
  }
  throw new Error('Internal Server Error');
};

const create = async (task: Task): Promise<Task> => {
  const createdAt = Date.now();
  const newTask = await Task.create({
    ...task,
    createdAt,
  });
  if(newTask) {
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
  if(deletedRows) {
    return deletedRows;
  }
  throw new Error('Internal Server Error');
}

export default { getAll, create, deleteTask };