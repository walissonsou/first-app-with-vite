// context/todoContext.tsx
import * as React from 'react';
import { useState } from 'react';
import { TasksContextType, ITask } from "./types";

export const TodoContext = React.createContext<TasksContextType | null>(null);

export const TodoProvider = ({children}: any) => {
  const [todos, setTodos] = useState<ITask[]>([
    {
      id: 1,
      title: 'post 1',
     
    },
    {
      id: 2,
      title: 'post 2',     
    },
  ]);
  const saveTodo = (todo: ITask) => {
    const newTodo: ITask = {
      id: Math.random(),
      title: todo.title   
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITask) => {
      if (todo.id === id) {
        todo.isCompleted = true;
        setTodos([...todos]);
      }
    });
  };

 
    return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}</TodoContext.Provider>;
  };
  )
