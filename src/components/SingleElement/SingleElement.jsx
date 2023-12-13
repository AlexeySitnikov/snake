import style from './style.module.css'

export function SingleElement({ element }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.square}`}>
        {element}
      </div>
    </div>
  )
}
