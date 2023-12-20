export function goLeft({ snake, setSnake, setColapse }) {
  const currentSnake = [snake.length]

  // how it was
  // let theRightestElement = 0

  if (snake[0].X > snake[snake.length - 1].X) {
    currentSnake[0] = {
      X: snake[snake.length - 1].X - 1,
      Y: snake[snake.length - 1].Y,
      apple: snake[snake.length - 1].apple,
      snake: snake[snake.length - 1].snake,
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

  // how it was
  // if (theRightestElement) {
  //   currentSnake[0] = {
  //     X: snake[snake.length - 1].X - 1,
  //     Y: snake[snake.length - 1].Y,
  //     apple: snake[snake.length - 1].apple,
  //     snake: snake[snake.length - 1].snake,
  //   }
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = snake[snake.length - i]
  //   }
  // } else {
  //   currentSnake[0] = {
  //     X: snake[0].X - 1,
  //     Y: snake[0].Y,
  //     apple: snake[0].apple,
  //     snake: snake[0].snake,
  //   }
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = snake[i - 1]
  //   }
  // }

  if (currentSnake[0].X < 0) {
    setColapse(true)
  } else {
    setSnake(currentSnake)
  }
}
