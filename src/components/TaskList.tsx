import Task from './Task';
import { type Task as TaskType } from '../types';
import { useState } from 'react';

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
  const [tasks, setTasks] = useState<TaskType[]>(TASKS || []);

  const handleClick = (id: number): void => {
    const taskCopy = structuredClone(tasks);
    const task = taskCopy[id - 1];
    task.completed = !task.completed;
    setTasks(taskCopy);
  };

  return (
    <div className='inline-flex flex-col gap-4 items-center pt-4 w-full'>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleClick={() => handleClick(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
