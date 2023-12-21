import { width } from './fieldSize'

export function goRight({ snake, setSnake, setColapse }) {
  const currentSnake = [snake.length]

  if (snake[0].X < snake[snake.length - 1].X) {
    currentSnake[0] = {
      X: snake[snake.length - 1].X + 1,
      Y: snake[snake.length - 1].Y,
      apple: snake[snake.length - 1].apple,
      snake: snake[snake.length - 1].snake,
      head: true,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = {
        X: snake[snake.length - i].X,
        Y: snake[snake.length - i].Y,
        apple: snake[snake.length - i].apple,
        snake: snake[snake.length - i].snake,
        head: false,
      }
    }
  } else {
    currentSnake[0] = {
      X: snake[0].X + 1,
      Y: snake[0].Y,
      apple: snake[0].apple,
      snake: snake[0].snake,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = snake[i - 1]
    }
  }

  if (currentSnake[0].X > (width - 1)) {
    setColapse(true)
  } else {
    setSnake(currentSnake)
  }
}
