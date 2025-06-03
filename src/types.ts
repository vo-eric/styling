export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TaskProps {
  task: Task;
  handleClick: () => void;
}

export interface Message {
  id: number;
  text: string;
  from: User;
}

export interface User {
  id: number;
  name: string;
  imageUrl: string;
}

export interface MessageProps {
  message: Message;
  endOfChain: boolean; // uiState, calculated on the fly to tell the message to render right
  beginningOfChain: boolean;
}
