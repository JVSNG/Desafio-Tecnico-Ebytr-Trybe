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

export default { getAll };