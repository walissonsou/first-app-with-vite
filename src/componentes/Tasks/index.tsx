import { useContext } from 'react';
import { TodoContext } from '../Context/TodoProvider';
import Task from '../Task/index'
import styles from './task.module.css'


export function Tasks() {
  const { tasks } = useContext(TodoContext)

  const tasksQuantidade = tasks?.length
  const tasksCompletas = tasks?.filter((task) => task.isCompleted).length
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>
            Tarefas criadas
          </p>
          <span> {tasksQuantidade}</span>
        </div>
        <div>
          <p className={styles.textRoxo}> Concluídas
          </p>
          <span> {tasksCompletas} de {tasksQuantidade}</span>
        </div>
      </header>
      <div className={styles.list}>
        {(tasks ?? []).map((tasks) => (
          <Task key={tasks.id} task={tasks} />
        ))}
      </div>
    </section>
    
  )
}
