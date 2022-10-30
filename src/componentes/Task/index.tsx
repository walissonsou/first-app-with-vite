import { useContext } from 'react';
import trash from '../../assets/trash.svg'
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';
import styles from './task.module.css'

interface Prop {
  task: ITask;
}

export default function Task({ task }: Prop) {

  const { tasks, setTasks } = useContext(TodoContext)

  function DeleteTaskById(taskId: any) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    console.log('Deletado')
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <button className={styles.checkContainer}>

        <div>
          {task.isCompleted}
        </div>
      </button>
      <p>
        {task.title}
      </p>
      <button className={styles.trash} onClick={() => DeleteTaskById(task.id)}>
        <img src={trash} />
      </button>
    </div>
  )
}
