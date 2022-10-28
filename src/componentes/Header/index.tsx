import todoLogo from '../../assets/todoLogo.png';
import plus from '../../assets/plus.png';
import styles from './header.module.css'

export function Header() {
  
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm}>
        <input placeholder="Digite aqui"></input>
        <button className={styles.Button}>      Criar <img src={plus} /> </button>
      </form>
    </header>
  )
}
