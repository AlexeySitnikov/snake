export function goLeft({ snake, setSnake }) {
  const horizontal = snake.every((e) => snake[0].Y === e.Y)
  const reversedArray = [...snake].reverse()
  const orderOfTheHeadAtInitialArray = snake.findIndex((e) => e.head)
  const orderOfTheHeadAtReversedArray = reversedArray.findIndex((e) => e.head)

  const currentArray = [snake.length]

  if (horizontal) {
    if ((snake[0].X < reversedArray[0].X)) {
      currentArray[0] = {
        X: snake[0].X - 1,
        Y: snake[0].Y,
        apple: snake[0].apple,
        snake: snake[0].snake,
        head: true,
      }
      for (let i = 1; i < snake.length; i += 1) {
        currentArray[i] = {
          X: snake[i - 1].X,
          Y: snake[i - 1].Y,
          apple: snake[i - 1].apple,
          snake: snake[i - 1].snake,
          head: false,
        }
      }
    } else {
      currentArray[0] = {
        X: reversedArray[0].X - 1,
        Y: reversedArray[0].Y,
        apple: reversedArray[0].apple,
        snake: reversedArray[0].snake,
        head: true,
      }
      for (let i = 1; i < reversedArray.length; i += 1) {
        currentArray[i] = {
          X: reversedArray[i - 1].X,
          Y: reversedArray[i - 1].Y,
          apple: reversedArray[i - 1].apple,
          snake: reversedArray[i - 1].snake,
          head: false,
        }
      }
    }
  } else if (!horizontal) {
    if (!orderOfTheHeadAtInitialArray) {
      currentArray[0] = {
        X: snake[0].X - 1,
        Y: snake[0].Y,
        apple: snake[0].apple,
        snake: snake[0].snake,
        head: true,
      }
      for (let i = 1; i < snake.length; i += 1) {
        currentArray[i] = {
          X: snake[i - 1].X,
          Y: snake[i - 1].Y,
          apple: snake[i - 1].apple,
          snake: snake[i - 1].snake,
          head: false,
        }
      }
    } else if (!orderOfTheHeadAtReversedArray) {
      currentArray[0] = {
        X: reversedArray[0].X - 1,
        Y: reversedArray[0].Y,
        apple: reversedArray[0].apple,
        snake: reversedArray[0].snake,
        head: true,
      }
      for (let i = 1; i < reversedArray.length; i += 1) {
        currentArray[i] = {
          X: reversedArray[i - 1].X,
          Y: reversedArray[i - 1].Y,
          apple: reversedArray[i - 1].apple,
          snake: reversedArray[i - 1].snake,
          head: false,
        }
      }
    }
  }

  setSnake(currentArray)
}
