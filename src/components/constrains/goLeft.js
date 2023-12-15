// import { getMinX } from './getMinX'

export function goLeft({ snake, setSnake }) {
  const currentSnake = [snake.length]

  if (!(snake[0].X - snake[snake.length - 1].X)) {
    currentSnake[0] = {
      X: snake[snake.length - 1].X - 1,
      Y: snake[snake.length - 1].Y,
      apple: false,
      snake: true,
    }
    for (let i = 1; i < snake.length - 1; i += 1) {
      currentSnake[i] = {
        X: snake[snake.length - i].X,
        Y: snake[snake.length - i].Y,
        apple: false,
        snake: true,
      }
    }
  } else {
  //   currentSnake[0] = {
  //     X: snake[0].X - 1,
  //     Y: snake[0].Y,
  //     apple: false,
  //     snake: true,
  //   }
  // }

  // for (let i = 1; i < snake.length; i += 1) {
  //   currentSnake[i] = {
  //     X: snake[i - 1].X,
  //     Y: snake[i - 1].Y,
  //     apple: false,
  //     snake: true,
  //   }
  }
  setSnake(currentSnake)
}
