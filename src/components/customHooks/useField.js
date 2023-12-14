import { useEffect, useState } from 'react'
import { height, width } from '../constrains/fieldSize'
import { getInitialPosition } from '../constrains/getInitialPosition'

export function useField() {
  const [field, setField] = useState([])
  const currentField = []
  const { initialPosition } = getInitialPosition()
  for (let i = 0; i < height; i += 1) {
    currentField[i] = []
    for (let j = 0; j < width; j += 1) {
      currentField[i][j] = {
        apple: false,
        snake: false,
      }
    }
  }

  const makeSnake = () => {
    if (initialPosition.vertical) {
      currentField[initialPosition.initialGridY][initialPosition.initialGridX] = {
        apple: false,
        snake: true,
      }
      currentField[initialPosition.initialGridY - 1][initialPosition.initialGridX] = {
        apple: false,
        snake: true,
      }
      currentField[initialPosition.initialGridY - 2][initialPosition.initialGridX] = {
        apple: false,
        snake: true,
      }
    } else {
      currentField[initialPosition.initialGridY][initialPosition.initialGridX] = {
        apple: false,
        snake: true,
      }
      currentField[initialPosition.initialGridY][initialPosition.initialGridX - 1] = {
        apple: false,
        snake: true,
      }
      currentField[initialPosition.initialGridY][initialPosition.initialGridX - 2] = {
        apple: false,
        snake: true,
      }
    }
    setField(currentField)
  }

  useEffect(() => {
    makeSnake()
  }, [])

  return {
    field,
  }
}
