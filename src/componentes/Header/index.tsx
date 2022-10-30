import todoLogo from '../../assets/todoLogo.png';
import plus from '../../assets/plus.png';
import styles from './header.module.css'
import { useContext, ChangeEvent, FormEvent } from 'react';
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';


export function Header() { 

  const { tasks, setTasks } = useContext(TodoContext)

  function saveTask (task: ITask){
    const newTask: ITask = {
      id: task.id,
      title: task.title,
      isCompleted: task.isCompleted,
    };
    setTasks([...tasks, newTask]);
  };
  
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm} >
        <input 
        placeholder="Digite aqui"       

        ></input>
        <button 
          className={styles.Button} 
          onClick={saveTask}
          > 
              Criar
            <img src={plus} />
          </button>
      </form>
    </header>
  )
}
