import { useEffect, useState } from 'react'
import { height, width } from '../constrains/fieldSize'

export function useField() {
  const [field, setField] = useState([])

  const makeField = () => {
    const currentField = []
    let index = 1
    for (let i = 0; i < height; i += 1) {
      currentField[i] = []
      for (let j = 0; j < width; j += 1) {
        currentField[i][j] = (index)
        index += 1
      }
    }
    setField(currentField)
  }

  useEffect(() => {
    makeField()
  })

  return {
    field,
    setField,
    makeField,
  }
}
