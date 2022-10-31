import { createContext, ReactNode, useState } from "react"
import { ITask, TasksContextType } from "./types";



export const TodoContext = createContext({} as TasksContextType);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      title: 'post 1',
      isCompleted: true
    },
    {
      id: '2',
      title: 'post 2',
      isCompleted: true
    },
  ]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  )
}
