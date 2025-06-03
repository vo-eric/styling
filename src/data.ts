import { type Message, type Task, type User } from './types';
import imageOne from './assets/237f92b8c3fa630880a17b97a1f864fb528f0aa2.png';
import imageTwo from './assets/48fb0979b0fbdd8e320622de39475b562ddad56d.png';

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
