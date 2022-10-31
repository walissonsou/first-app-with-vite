import { useContext } from 'react';
import trash from '../../assets/trash.svg'
import { TodoContext } from '../Context/TodoProvider';
import { ITask } from '../Context/types';
import styles from './task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Prop {
  task: ITask;
}

export default function Task({ task }: Prop) {

  const { tasks, setTasks } = useContext(TodoContext)

  function DeleteTaskById(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    console.log('Deletado')
    setTasks(newTasks);
  };

  function onComplet(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } return task
    });
    setTasks(newTasks);
  }


  return (
    <div className={styles.container}>
      <button className={styles.checkContainer} onClick={() => onComplet(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}

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
