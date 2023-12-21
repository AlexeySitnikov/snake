// import { width } from './fieldSize'

export function goRight({ snake, setSnake }) {
  const currentSnake = [snake.length]
  const indexOfTheHead = snake.findIndex((e) => e.head)

  if (!indexOfTheHead) {
    const tempArray = snake.reverse()
    currentSnake[0] = {
      X: tempArray[0].X + 1,
      Y: tempArray[0].Y,
      apple: tempArray[0].apple,
      snake: tempArray[0].snake,
      head: true,
    }
    for (let i = 1; i < tempArray.length; i += 1) {
      currentSnake[i] = {
        X: tempArray[i - 1].X,
        Y: tempArray[i - 1].Y,
        apple: tempArray[i - 1].apple,
        snake: tempArray[i - 1].snake,
        head: false,
      }
    }
    console.log(currentSnake)
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

  // if (snake[0].X < snake[snake.length - 1].X) {
  //   currentSnake[0] = {
  //     X: snake[snake.length - 1].X + 1,
  //     Y: snake[snake.length - 1].Y,
  //     apple: snake[snake.length - 1].apple,
  //     snake: snake[snake.length - 1].snake,
  //     head: true,
  //   }
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = {
  //       X: snake[snake.length - i].X,
  //       Y: snake[snake.length - i].Y,
  //       apple: snake[snake.length - i].apple,
  //       snake: snake[snake.length - i].snake,
  //       head: false,
  //     }
  //   }
  // } else {
  //   currentSnake[0] = {
  //     X: snake[0].X + 1,
  //     Y: snake[0].Y,
  //     apple: snake[0].apple,
  //     snake: snake[0].snake,
  //   }
  //   for (let i = 1; i < snake.length; i += 1) {
  //     currentSnake[i] = snake[i - 1]
  //   }
  // }

  // if (currentSnake[0].X > (width - 1)) {
  //   setColapse(true)
  // } else {
  // console.log(snake)
  // console.log(currentSnake)
  setSnake(currentSnake)
  // }
}
