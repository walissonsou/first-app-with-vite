import { useState } from 'react';
import { Header } from './componentes/Header/index'
import { Tasks } from './componentes/Tasks'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean
}

function App() {
  const [ tasks, setTasks] = useState<ITask[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true;
    }
  ])
  return (
    <>
      <Header />
      <Tasks tasks={tasks}/>
    </>
  )
}

export default App
