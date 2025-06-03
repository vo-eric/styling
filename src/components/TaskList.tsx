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

const sortTasksByCompletion = (tasks: TaskType[]): TaskType[] => {
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  return [...completedTasks, ...uncompletedTasks];
};

function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>(TASKS || []);

  //look into passing the whole task list
  const handleClick = (id: number): void => {
    const taskListCopy = structuredClone(tasks);
    const task = taskListCopy.find((task) => task.id === id);

    if (!task) {
      return;
    }

    task.completed = !task.completed;
    //add prev
    setTasks(sortTasksByCompletion(taskListCopy));
  };

  return (
    <div className='inline-flex flex-col gap-4 items-center pt-4 w-full font-[Inter]'>
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
