export interface ITask {
  id: number;
  title: string;
  isCompleted?: boolean
}

export type TasksContextType = {
  tasks?: ITask[];
  saveTodo: (tasks: ITask[]) => void;  
  updateTodo: (id: number) => void;
}
