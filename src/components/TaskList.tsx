import Task from './Task';
import { type Task as TaskType } from '../types';

const TASKS: TaskType[] = [
  {
    title: 'Sweep the kitchen',
    description: 'Get under the cabinets, do a good job',
    completed: false,
    id: 1,
  },
  {
    title: 'Dishwashing',
    description: 'Wash and dry dishes, pots, pans, and utensils',
    completed: false,
    id: 2,
  },
  {
    title: 'Laundry',
    description: 'Wash, dry, fold, and put away clothes and linens.',
    completed: false,
    id: 3,
  },
  {
    title: 'Vacuuming',
    description: 'Vacuum carpets, rugs, and floors throughout the house.',
    completed: false,
    id: 4,
  },
  {
    title: 'Dusting',
    description: 'Dust furniture, shelves, and other surfaces.',
    completed: false,
    id: 5,
  },
];

function TaskList() {
  return (
    <div>
      {TASKS.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
