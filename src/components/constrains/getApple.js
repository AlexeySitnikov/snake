import { height, width } from './fieldSize'

export function getApple({ snake, setApple }) {
  let appleX = Math.floor(Math.random() * (width))
  let appleY = Math.floor(Math.random() * (height))
  const xCoordinates = snake.map((e) => e.X)
  const yCoordinates = snake.map((e) => e.Y)

  while ((xCoordinates.includes(appleX)) || (yCoordinates.includes(appleY))) {
    appleX = Math.floor(Math.random() * (width))
    appleY = Math.floor(Math.random() * (height))
  }
  const apple = {
    X: appleX,
    Y: appleY,
    apple: true,
    snake: false,
  }
  setApple(apple)
}

// example
// Math.random() * (max - min) + min
