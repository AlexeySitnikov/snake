export function goLeft({ snake, setSnake }) {
  const currentSnake = [snake.length]

  let theRightestElement = 0
  if (snake[0].X > snake[snake.length - 1].X) {
    theRightestElement = snake.length - 1
  }

  if (theRightestElement) {
    currentSnake[0] = {
      X: snake[theRightestElement].X - 1,
      Y: snake[theRightestElement].Y,
      apple: snake[theRightestElement].apple,
      snake: snake[theRightestElement].snake,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = snake[snake.length - i]
    }
  } else {
    currentSnake[0] = {
      X: snake[0].X - 1,
      Y: snake[0].Y,
      apple: snake[0].apple,
      snake: snake[0].snake,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = snake[i - 1]
    }
  }

  setSnake(currentSnake)
}
