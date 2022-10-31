export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type TasksContextType = {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void; 
  
}
