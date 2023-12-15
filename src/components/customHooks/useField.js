import { useEffect, useState } from 'react'
import { height, width } from '../constrains/fieldSize'

export function useField({ snake }) {
  const [field, setField] = useState([])
  const currentField = []

  for (let i = 0; i < height; i += 1) {
    currentField[i] = []
    for (let j = 0; j < width; j += 1) {
      currentField[i][j] = {
        apple: false,
        snake: false,
      }
    }
  }

  const addSnakeToField = () => {
    for (let i = 0; i < snake.length; i += 1) {
      const { X } = snake[i]
      const { Y } = snake[i]
      currentField[Y][X] = {
        apple: snake[i].apple,
        snake: snake[i].snake,
      }
    }
  }

  useEffect(() => {
    addSnakeToField()
    setField(currentField)
  }, [snake])

  return {
    field,
  }
}
