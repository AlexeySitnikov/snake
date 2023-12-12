import { SingleElement } from '../SingleElement/SingleElement'
import style from './style.module.css'

export function Rows({ row }) {
  return (
    <div className={`${style.container}`}>
      {row.map((element) => (
        <SingleElement
          key={crypto.randomUUID()}
          element={element}
        />
      ))}
    </div>
  )
}
