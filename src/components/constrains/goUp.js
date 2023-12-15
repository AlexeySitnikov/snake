export function goUp({ snake, setSnake }) {
  const currentSnake = [snake.length]

  currentSnake[0] = {
    X: snake[0].X,
    Y: snake[0].Y - 1,
    apple: false,
    snake: true,
  }
  for (let i = 1; i < snake.length; i += 1) {
    currentSnake[i] = {
      X: snake[i - 1].X,
      Y: snake[i - 1].Y,
      apple: false,
      snake: true,
    }
  }
  setSnake(currentSnake)
}
