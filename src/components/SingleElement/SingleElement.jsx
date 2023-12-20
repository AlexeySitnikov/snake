import style from './style.module.css'

export function SingleElement({ element }) {
  let styleOfSquare = `${style.square}`
  if (element.snake) {
    styleOfSquare = `${style.blackSquare}`
  }
  if (element.apple) {
    styleOfSquare = `${style.redSquare}`
  }
  return (
    <div className={`${style.container}`}>
      <div className={styleOfSquare} />
    </div>
  )
}

// example
// className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
