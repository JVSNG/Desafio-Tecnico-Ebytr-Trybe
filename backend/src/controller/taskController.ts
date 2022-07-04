import { Request, Response } from "express";
import taskService from '../service/taskService'

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tasks = await taskService.getAll();
    return res.status(200).send(tasks);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newTask = req.body
    const task = await taskService.create(newTask);
    return res.status(201).send(task);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const task = await taskService.deleteTask(Number(id));
    return res.status(200).send({ message: `Destroyed ${task} rows` });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export default { getAll, create, deleteTask };