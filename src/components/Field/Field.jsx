import { Rows } from '../Rows/Rows'
import { goDown } from '../constrains/goDown'
import { goLeft } from '../constrains/goLeft'
import { goRight } from '../constrains/goRight'
import { goUp } from '../constrains/goUp'
import {
  arrowDown, arrowLeft, arrowRight, arrowUp, spaceButton,
} from '../constrains/keyCodes'
import { useField } from '../customHooks/useField'
import { useSnake } from '../customHooks/useSnake'

export function Field() {
  const { snake, setSnake } = useSnake()
  const { field } = useField({ snake })

  const keyPress = (e) => {
    if (e.keyCode === spaceButton) {
      console.log('Pause')
    }
    if (e.keyCode === arrowLeft) {
      goLeft({ snake, setSnake })
    }
    if (e.keyCode === arrowRight) {
      goRight({ snake, setSnake })
    }
    if (e.keyCode === arrowDown) {
      goDown({ snake, setSnake })
    }
    if (e.keyCode === arrowUp) {
      goUp({ snake, setSnake })
    }
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
