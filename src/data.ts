import { type Message, type Task, type User } from './types';
import imageOne from './assets/48fb0979b0fbdd8e320622de39475b562ddad56d.png';
import imageTwo from './assets/237f92b8c3fa630880a17b97a1f864fb528f0aa2.png';
import imageThree from './assets/e70883927f135f87cd002a7122bb6b6bd3722bc6.jpg';
import type { Group, Post } from './components/Post';

export const TASKS: Task[] = [
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

export const USERS: User[] = [
  {
    id: 1,
    name: 'Stevie Martin',
    imageUrl: imageOne,
  },
  {
    id: 2,
    name: 'Fatiha El-Ghorri',
    imageUrl: imageTwo,
  },
];

export const MESSAGES: Message[] = [
  {
    id: 1,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    from: USERS[0],
  },
  {
    id: 2,
    text: "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.",
    from: USERS[0],
  },
  {
    id: 3,
    text: "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
    from: USERS[1],
  },
  {
    id: 4,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    from: USERS[0],
  },
];

const GROUPS: Group[] = [
  {
    id: 1,
    name: 'Fractal Bootcamp',
  },
];

const date: Date = new Date();

export const POSTS: Post[] = [
  {
    id: 0,
    author: USERS[0],
    createdAt: date.setDate(date.getDate() - 3),
    imageUrl: imageThree,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam aliquet ex. Maecenas quis arcu metus. Nulla facilisi. Sed malesuada dolor sem, et lacinia libero consequat vel. Aenean ac lacinia nulla. Fusce gravida sem non leo eleifend, nec imperdiet magna tincidunt. Proin cursus enim accumsan ante tincidunt consectetur. Proin semper volutpat arcu nec vestibulum. Pellentesque interdum enim sed lacus maximus dapibus. Morbi interdum libero a neque pulvinar, eu molestie erat cursus. Maecenas vestibulum, urna eget lobortis iaculis, nulla ante efficitur nisl, sed dignissim quam turpis at nibh. Donec cursus quam non diam tempus pellentesque nec sed sem. Nullam nunc elit, viverra sed tincidunt pulvinar, accumsan sit amet ipsum. Curabitur nec arcu non enim vestibulum fringilla. Pellentesque eget suscipit quam, sed mollis elit. Suspendisse sit amet blandit neque.',
    numberOfLikes: 24,
    numberOfComments: 4,
    group: GROUPS[0],
  },
];

export const createHeatGrid = (): number[] => {
  const heatGrid = new Array(35).fill(null).map(() => {
    return Math.round(Math.random() * 4) * 100;
  });

  return heatGrid;
};

export const DAYS: string[] = [
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat',
  'Sun',
];
