import { type Task as TaskType } from '../types';

function Task({ task }: { task: TaskType }) {
  return (
    <div className='border border-grey-50 text-grey-400 p-2 flex items-center gap-3 rounded-lg max-sm:w-[95%] m-auto w-[80%]'>
      <button className='h-[25px] w-[25px] border border-grey-50 rounded-lg'>
        {task.completed}
      </button>
      <div className=''>
        <p className='text-black text-lg'>{task.title}</p>
        <p className='text-grey-400 text-base'>{task.description}</p>
      </div>
    </div>
  );
}

export default Task;
