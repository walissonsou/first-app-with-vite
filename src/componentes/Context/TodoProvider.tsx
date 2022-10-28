import { createContext, useState } from "react"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean
}

const TodoContext = createContext({} as any)

export const TodoProvider = ({children}: any) => {
  const [ tasks, setTasks] = useState<ITask[]>([])
  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
      { children }
    </TodoContext.Provider>
  )
}
