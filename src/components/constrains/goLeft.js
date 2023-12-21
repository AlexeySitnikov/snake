export function goLeft({ snake, setSnake }) {
  const currentSnake = [snake.length]
  const indexOfTheHead = snake.findIndex((e) => e.head)

  if (!indexOfTheHead) {
    currentSnake[0] = {
      X: snake[0].X - 1,
      Y: snake[0].Y,
      apple: snake[0].apple,
      snake: snake[0].snake,
      head: true,
    }
    for (let i = 1; i < snake.length; i += 1) {
      currentSnake[i] = {
        X: snake[i - 1].X,
        Y: snake[i - 1].Y,
        apple: snake[i - 1].apple,
        snake: snake[i - 1].snake,
        head: false,
      }
    }
  } else {
    const tempArray = snake.reverse()
    console.log(tempArray)
  }

  // currentSnake[0] = {
  //   X: snake[indexOfTheHead].X,
  //   Y: snake[indexOfTheHead].Y,
  //   apple: snake[indexOfTheHead].apple,
  //   snake: snake[indexOfTheHead].snake,
  //   head: true,
  // }

  // if (!indexOfTheHead) {
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = {
  //       X: snake[i].X,
  //       Y: snake[i].Y,
  //       apple: snake[i].apple,
  //       snake: snake[i].snake,
  //       head: false,
  //     }
  //   }
  // } else {
  //   let j = 1
  //   for (let i = snake.length - 2; i > 0; i -= 1) {
  //     currentSnake[j] = {
  //       X: snake[i].X,
  //       Y: snake[i].Y,
  //       apple: snake[i].apple,
  //       snake: snake[i].snake,
  //       head: false,
  //     }
  //     j += 1
  //   }
  // }

  // how it was
  // let theRightestElement = 0

  // if (snake[0].X > snake[snake.length - 1].X) {
  //   currentSnake[0] = {
  //     X: snake[snake.length - 1].X - 1,
  //     Y: snake[snake.length - 1].Y,
  //     apple: snake[snake.length - 1].apple,
  //     snake: snake[snake.length - 1].snake,
  //     head: snake[snake.length - 1].head,
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
  //     head: snake[0].head,
  //   }
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = snake[i - 1]
  //   }
  // }

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

  // if (currentSnake[0].X < 0) {
  //   setColapse(true)
  // } else {
  // console.log(snake)
  // console.log(currentSnake)
  setSnake(currentSnake)
  // }
}
