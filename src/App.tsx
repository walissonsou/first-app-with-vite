import { useContext, useState } from 'react';
import { TodoProvider, TodoContext } from './componentes/Context/TodoProvider';
import { Header } from './componentes/Header/index'
import { Tasks } from './componentes/Tasks'

function App() {  
  const { tasks, setTasks } = useContext(TodoContext)

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <>
    <TodoProvider>
      <Header onAddTask={addTask} />
      <Tasks />
    </TodoProvider>
    </>
  )
}

export default App
