import { useEffect, useState } from 'react'
import { getInitialPosition } from '../constrains/getInitialPosition'

export function useSnake() {
  const [snake, setSnake] = useState([])

  useEffect(() => {
    const { initialPosition } = getInitialPosition()
    const initialLength = 5
    const currentSnake = [initialLength]

    if (initialPosition.vertical) {
      for (let i = 0; i < initialLength; i += 1) {
        currentSnake[i] = {
          X: initialPosition.initialGridX,
          Y: initialPosition.initialGridY - initialLength + i,
          apple: false,
          snake: true,
          head: !i,
        }
      }
    } else {
      for (let i = 0; i < initialLength; i += 1) {
        currentSnake[i] = {
          X: initialPosition.initialGridX - Math.floor(initialLength / 2) + i,
          Y: initialPosition.initialGridY,
          apple: false,
          snake: true,
          head: !i,
        }
      }
    }
    // console.log(currentSnake)
    setSnake(currentSnake)
  }, [])

  return {
    snake,
    setSnake,
  }
}
