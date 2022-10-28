import { useState } from 'react';
import { TodoProvider } from './componentes/Context/TodoProvider';
import { Header } from './componentes/Header/index'
import { Tasks } from './componentes/Tasks'

function App() {  
  return (
    <>
    <TodoProvider>
      <Header />
      <Tasks />
    </TodoProvider>
    </>
  )
}

export default App
