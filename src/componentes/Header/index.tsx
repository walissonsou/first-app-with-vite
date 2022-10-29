import todoLogo from '../../assets/todoLogo.png';
import plus from '../../assets/plus.png';
import styles from './header.module.css'
import { useContext, ChangeEvent, FormEvent } from 'react';
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';

interface Props{
  onAddTask: (taskTitle: ITask[]) => void;
 }

export function Header({onAddTask}: Props) {
  const { tasks, setTasks } = useContext(TodoContext)

  function handleSaveTodo (event: FormEvent) {
    event.preventDefault();

    onAddTask(tasks);
    setTasks("")
  }
  
  function onChangeTasks(event: 
    ChangeEvent<HTMLInputElement>) {
      setTasks(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm} onSubmit={handleSaveTodo}>
        <input 

        placeholder="Digite aqui"
        onChange={onChangeTasks} 
        value={tasks} 

        ></input>
        <button 
          className={styles.Button} 
          onClick={handleSaveTodo}> 
              Criar
            <img src={plus} />
          </button>
      </form>
    </header>
  )
}
