import { createContext, ReactNode, useState } from "react"
import { ITask, TasksContextType } from "./types";



export const TodoContext = createContext({} as TasksContextType);

export const TodoProvider = ({children}: {children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: Math.random(),
      title: 'teste',
      isCompleted: true,
    },
    {
      id: Math.random(),
      title: 'teste',
      isCompleted: true,
    },
  ]);

  const saveTodo = (task: ITask) => {
    const newTodo: ITask = {
      id: task.id,
      title: task.title,
      isCompleted: task.isCompleted,      
    };
    setTasks([...tasks, newTodo]);
  };

  const updateTodo = (id: number) => {
    tasks.filter((task: ITask) => {
      if (task.id === id) {
        task.isCompleted = true;
        setTasks([...tasks]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{tasks, saveTodo,updateTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
