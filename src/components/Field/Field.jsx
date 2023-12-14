import { Rows } from '../Rows/Rows'
import {
  arrowDown, arrowLeft, arrowRight, arrowUp,
} from '../constrains/keyCodes'
import { useField } from '../customHooks/useField'

export function Field() {
  const {
    field,
  } = useField()

  const keyPress = (e) => {
    if (
      e.keyCode === arrowLeft
      || e.keyCode === arrowRight
      || e.keyCode === arrowDown
      || e.keyCode === arrowUp
    ) { console.log('ArrowKeys') }
  }

  document.onkeydown = keyPress

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
