import Task from './Task';
import { type Task as TaskType } from '../types';
import { useState } from 'react';
import { TASKS } from '../data';

const sortTasksByCompletion = (tasks: TaskType[]): TaskType[] => {
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  return [...completedTasks, ...uncompletedTasks];
};

function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>(TASKS || []);

  //look into passing the whole task list
  const handleClick = (id: number): void => {
    setTasks((prev: TaskType[]) => {
      const taskListCopy = structuredClone(prev);
      const task = taskListCopy.find((task) => task.id === id);

      if (!task) {
        return taskListCopy;
      }
      task.completed = !task.completed;

      return sortTasksByCompletion(taskListCopy);
    });

    return;
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
