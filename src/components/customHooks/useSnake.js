import { useEffect, useState } from 'react'
import { getInitialPosition } from '../constrains/getInitialPosition'

export function useSnake() {
  const [snake, setSnake] = useState([])

  useEffect(() => {
    const { initialPosition } = getInitialPosition()
    const currentSnake = []
    const initialLength = 5

    if (initialPosition.vertical) {
      for (let i = 0; i < initialLength; i += 1) {
        currentSnake.push({
          X: initialPosition.initialGridX,
          Y: initialPosition.initialGridY - i,
          apple: false,
          snake: true,
        })
      }
    } else {
      for (let i = 0; i < initialLength; i += 1) {
        currentSnake.push({
          X: initialPosition.initialGridX - i,
          Y: initialPosition.initialGridY,
          apple: false,
          snake: true,
        })
      }
    }
    setSnake(currentSnake)
  }, [])

  return {
    snake,
    setSnake,
  }
}
