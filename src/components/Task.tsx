import { type Task as TaskType } from '../types';

function Task({ task }: { task: TaskType }) {
  return (
    <div className=''>
      <button>{task.completed}</button>
      <p>{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
}

export default Task;
