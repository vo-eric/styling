import clsx from 'clsx';
import type { MessageProps } from '../types';

function Message({ message, endOfChain, beginningOfChain }: MessageProps) {
  return (
    <div
      className={clsx(
        'p-4 rounded-2xl text-base w-[80%]',
        message.from.id === 1 ? 'bg-blue ml-auto' : 'bg-grey-50 mr-auto',
        beginningOfChain && !endOfChain && 'rounded-br-none',
        endOfChain && !beginningOfChain && 'rounded-tr-none'
      )}
    >
      {message.text}
    </div>
  );
}

export default Message;
