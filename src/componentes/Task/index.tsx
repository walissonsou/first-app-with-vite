import trash from '../../assets/trash.svg'
import styles from './task.module.css'

export default function Task() {
  return (
    <div className={styles.container}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        oi oi papai como vc ta falcao te amo tubarao te amo
      </p>
      <button className={styles.trash}>
        <img src={trash} />
      </button>
    </div>
  )
}
