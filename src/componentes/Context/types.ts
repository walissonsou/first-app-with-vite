export interface ITask {
  id: number;
  title: string;
  isCompleted?: boolean
}

export type TasksContextType = {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void; 
  
}
