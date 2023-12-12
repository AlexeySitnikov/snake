import { Rows } from '../Rows/Rows'
import style from './style.module.css'

export function Field() {
  const field = []
  let index = 1
  for (let i = 0; i < 5; i += 1) {
    field[i] = []
    for (let j = 0; j < 10; j += 1) {
      field[i][j] = (index)
      index += 1
    }
  }
  console.log(field)
  return (
    <>
      {field.map((element) => (
        <div key={crypto.randomUUID()} className={`${style.container}`}>
          <Rows
            key={crypto.randomUUID()}
            row={element}
          />
          <br key={crypto.randomUUID()} />
        </div>
      ))}

    </>
  )
}
