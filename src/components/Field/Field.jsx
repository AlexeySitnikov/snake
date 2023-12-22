import { useEffect, useState } from 'react'
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
// import { getFeed } from '../constrains/getFeed'
// import { getApple } from '../constrains/getApple'

export function Field() {
  const { snake, setSnake } = useSnake()
  // const [colapse, setColapse] = useState(false)
  // const [apple, setApple] = useState({})
  const { field } = useField({
    snake,
  })
  const [seconds, setSeconds] = useState(0)
  const [direction, setDirection] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1)
      if (direction !== '' || direction !== 'pause') {
        switch (direction) {
          case 'left': goLeft({ snake, setSnake })
            break
          case 'right': goRight({ snake, setSnake })
            break
          case 'up': goUp({ snake, setSnake })
            break
          case 'down': goDown({ snake, setSnake })
            break
          default:
            break
        }
      }
    }, 350)
    return () => clearInterval(timer)
  }, [seconds, direction])

  const keyPress = (e) => {
    if (e.keyCode === spaceButton) {
      // getFeed({ snake, setSnake })
      setDirection('pause')
    }
    if (e.keyCode === arrowLeft) {
      setDirection('left')
    }
    if (e.keyCode === arrowRight) {
      setDirection('right')
    }
    if (e.keyCode === arrowDown) {
      setDirection('down')
    }
    if (e.keyCode === arrowUp) {
      setDirection('up')
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
