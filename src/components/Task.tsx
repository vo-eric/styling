import clsx from 'clsx';
import { type TaskProps } from '../types';

function Task({ task, handleClick }: TaskProps) {
  return (
    <div
      className={clsx(
        'border border-grey-50 text-grey-400 p-2 flex items-center gap-3 rounded-lg max-sm:w-[95%] m-auto w-[80%] transition duration-300 cursor-pointer hover:bg-green-50',
        {
          'bg-green-50': task.completed,
        }
      )}
      onClick={handleClick}
    >
      <button
        className={clsx(
          'h-[25px] w-[25px] border border-grey-50 rounded-lg transition duration-300',
          {
            'bg-green-400': task.completed,
          }
        )}
      >
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
