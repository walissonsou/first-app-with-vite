import todoLogo from '../../assets/todoLogo.png';
import plus from '../../assets/plus.png';
import styles from './header.module.css'
import { useContext, ChangeEvent, FormEvent, useState } from 'react';
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';

interface Props {
  onAddTask: (taskTitle: string ) => void;
}

export function Header({onAddTask}: Props) {
  const { tasks, setTasks } = useContext(TodoContext)
  

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(tasks);
    setTasks('');
  }

  function onChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTasks(event.target.value)
  }



  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Digite aqui"
          onChange={onChangeTask}
          value={tasks}
        ></input>
        <button
          className={styles.Button}
        >
          Criar
          <img src={plus} />
        </button>
      </form>
    </header>
  )
}
