import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  id!: number;
  title!: string;
  description!: string;
  status!: string;
  createdAt!: Date;
}
Task.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  status: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

export default Task;