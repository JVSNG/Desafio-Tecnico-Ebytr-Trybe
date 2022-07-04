import Task from '../models/Task';

const getAll = async (): Promise<Task[]> => {
  const tasks = await Task.findAll();
  if(tasks) {
    return tasks;
  }
  throw new Error('Internal Server Error');
};

export default { getAll };