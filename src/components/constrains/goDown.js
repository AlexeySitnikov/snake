import { height } from './fieldSize'

export function goDown({ snake, setSnake, setColapse }) {
  const currentSnake = [snake.length]

  if (snake[0].Y < snake[snake.length - 1].Y) {
    currentSnake[0] = {
      X: snake[snake.length - 1].X,
      Y: snake[snake.length - 1].Y + 1,
      apple: snake[snake.length - 1].apple,
      snake: snake[snake.length - 1].snake,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = snake[snake.length - i]
    }
  } else {
    currentSnake[0] = {
      X: snake[0].X,
      Y: snake[0].Y + 1,
      apple: snake[0].apple,
      snake: snake[0].snake,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = snake[i - 1]
    }
  }

  if (currentSnake[0].Y > (height - 1)) {
    setColapse(true)
  } else {
    setSnake(currentSnake)
  }
}
