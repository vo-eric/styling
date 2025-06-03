import Message from './Message';
import { MESSAGES } from '../data';

function MessageThread() {
  return (
    <div className='flex flex-col gap-2 font-[Inter]'>
      {MESSAGES.map((message, i) => {
        const isEndOfChain =
          !MESSAGES[i + 1] || message.from.id !== MESSAGES[i + 1].from.id;

        const isBeginningOfChain =
          i === 0 || message.from.id !== MESSAGES[i - 1].from.id;

        return (
          <Message
            message={message}
            endOfChain={isEndOfChain}
            beginningOfChain={isBeginningOfChain}
          />
        );
      })}
    </div>
  );
}

export default MessageThread;
