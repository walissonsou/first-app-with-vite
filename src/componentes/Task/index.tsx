import { ITask } from '../../App';
import trash from '../../assets/trash.svg'
import styles from './task.module.css'

interface Prop{
  task: ITask;
}

export default function Task({task}: Prop) {
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
      <button className={styles.trash}>
        <img src={trash} />
      </button>
    </div>
  )
}
