import { useEffect, useState } from 'react'
import { height, width } from '../constrains/fieldSize'

export function useField({ snake, colapse }) {
  const [field, setField] = useState([])
  const currentField = []

  for (let i = 0; i < height; i += 1) {
    currentField[i] = []
    for (let j = 0; j < width; j += 1) {
      currentField[i][j] = {
        apple: false,
        snake: false,
        head: false,
      }
    }
  }

  const addSnakeToField = () => {
    if (!colapse) {
      for (let i = 0; i < snake.length; i += 1) {
        const { X } = snake[i]
        const { Y } = snake[i]
        currentField[Y][X] = {
          apple: snake[i].apple,
          snake: snake[i].snake,
          head: snake[i].head,
        }
      }
    }
  }

  // const addAppleToField = () => {
  //   const { X, Y } = apple
  //   currentField[Y][X] = {
  //     apple: apple.apple,
  //     snake: apple.snake,
  //   }
  // }

  useEffect(() => {
    addSnakeToField()
    setField(currentField)
  }, [snake])

  // useEffect(() => {
  //   addAppleToField()
  //   setField(currentField)
  // }, [apple])

  return {
    field,
  }
}
