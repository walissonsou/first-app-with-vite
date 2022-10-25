import styles from './task.module.css'

export function Task() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>
          Tarefas criadas 
          </p>
          <span> 10</span>
        </div>
        <div>
          <p className={styles.textRoxo}> Concluídas 
          </p>
          <span> 2 de 10 </span>
        </div>
      </header>
    </section>
  )
}
