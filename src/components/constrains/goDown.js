export function goDown({ snake, setSnake }) {
  const currentSnake = [snake.length]

  let theHighestElement = 0
  if (snake[0].Y < snake[snake.length - 1].Y) {
    theHighestElement = snake.length - 1
  }

  if (theHighestElement) {
    currentSnake[0] = {
      X: snake[theHighestElement].X,
      Y: snake[theHighestElement].Y + 1,
      apple: snake[theHighestElement].apple,
      snake: snake[theHighestElement].snake,
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
  setSnake(currentSnake)
}
