import { Rows } from '../Rows/Rows'
import { useField } from '../customHooks/useField'

export function Field() {
  const {
    field,
  } = useField()

  return (
    <>
      {field.map((element) => (
        <Rows
          key={crypto.randomUUID()}
          row={element}
        />
      ))}

    </>
  )
}
