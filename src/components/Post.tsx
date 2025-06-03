import type { User } from '../types';
import { POSTS } from '../data';
import moment from 'moment';
import Avatar from './Avatar';

export interface Group {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  author: User;
  createdAt: number;
  imageUrl: string;
  description: string;
  numberOfLikes: number;
  numberOfComments: number;
  group: Group;
}

function Post() {
  return (
    <div className='font-[Inter] text-black w-[70%] h-[600px] m-auto p-7'>
      {POSTS.map((post) => {
        return (
          <div className='flex gap-4'>
            <Avatar user={post.author} />
            <div className='flex flex-col gap-6 '>
              <div className='text-grey-300'>
                <p>
                  <strong className='text-black font-medium'>
                    {post.author.name.split(' ')[0]}
                  </strong>{' '}
                  in {post.group.name}
                </p>
                <p>{moment(post.createdAt).fromNow()}</p>
              </div>
              <img
                className='w-full h-auto rounded-sm'
                src={post.imageUrl}
                alt={post.author.name}
              />
              <p className='text-[20px]'>{post.description}</p>
              <div className='text-base flex gap-4 font-medium '>
                <div className='flex items-center gap-2'>
                  <img src='/src//assets/heart.svg' alt='Heart icon' />
                  {post.numberOfLikes} likes
                </div>
                <div className='flex items-center gap-2'>
                  <img
                    src='/src/assets/message-square.svg'
                    alt='Message icon'
                  />
                  {post.numberOfComments} comments
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
