import style from './style.module.css'

export function SingleElement({ element }) {
  return (
    <div className={`${style.container}`}>
      <div className={element.snake ? `${style.blackSquare}` : `${style.square}`} />
    </div>
  )
}

// example
// className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
