import type { User } from '../types';

function Avatar({ user }: { user: User }) {
  return (
    <img
      src={user.imageUrl}
      alt={user.name}
      className='h-[48px] w-[48px] rounded-full'
    />
  );
}

export default Avatar;
