import todoLogo from '../../assets/todoLogo.png';
import plus from '../../assets/plus.png';
import styles from './header.module.css'
import { useContext, ChangeEvent, FormEvent } from 'react';
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';


interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {   

  const { tasks, setTasks } = useContext(TodoContext)
  

  function saveTask (taskTitle: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    onAddTask(tasks);
    setTasks("")
  }

  function onChangetitle(event: ChangeEvent<HTMLInputElement>){
    setTasks(event.target.value)
  }
    
  
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
        placeholder="Digite aqui"       
        onChange={onChangetitle}
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
