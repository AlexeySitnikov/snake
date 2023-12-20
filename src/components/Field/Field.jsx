import { useState } from 'react'
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
import { getApple } from '../constrains/getApple'

export function Field() {
  const { snake, setSnake } = useSnake()
  const [colapse, setColapse] = useState(false)
  const [apple, setApple] = useState({})
  const { field } = useField({
    snake, colapse, setColapse, apple,
  })

  const keyPress = (e) => {
    if (!colapse) {
      if (e.keyCode === spaceButton) {
        console.log('Pause')
      }
      if (e.keyCode === arrowLeft) {
        goLeft({ snake, setSnake, setColapse })
        getApple({ snake, setApple })
      }
      if (e.keyCode === arrowRight) {
        goRight({ snake, setSnake, setColapse })
      }
      if (e.keyCode === arrowDown) {
        goDown({ snake, setSnake, setColapse })
      }
      if (e.keyCode === arrowUp) {
        goUp({ snake, setSnake, setColapse })
      }
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
