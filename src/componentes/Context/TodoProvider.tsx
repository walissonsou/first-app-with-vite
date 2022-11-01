import { createContext, ReactNode, useState } from "react"
import { ITask, TasksContextType } from "./types";

export const TodoContext = createContext({} as TasksContextType);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  )
}
