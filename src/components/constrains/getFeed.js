export function getFeed({ snake, setSnake }) {
  const reversedArray = [...snake].reverse()
  const orderOfTheHeadAtInitialArray = snake.findIndex((e) => e.head)
  const orderOfTheHeadAtReversedArray = reversedArray.findIndex((e) => e.head)
  const currentArray = [snake.length + 1]

  if (!orderOfTheHeadAtInitialArray) {
    for (let i = 0; i < snake.length; i += 1) {
      currentArray[i] = snake[i]
    }
    currentArray[snake.length] = {
      X: currentArray[snake.length - 1].X,
      Y: currentArray[snake.length - 1].Y,
      apple: currentArray[snake.length - 1].apple,
      snake: currentArray[snake.length - 1].snake,
      head: false,
    }
  }

  if (!orderOfTheHeadAtReversedArray) {
    for (let i = 0; i < reversedArray.length; i += 1) {
      currentArray[i] = reversedArray[i]
    }
    currentArray[reversedArray.length] = {
      X: currentArray[reversedArray.length - 1].X,
      Y: currentArray[reversedArray.length - 1].Y,
      apple: currentArray[reversedArray.length - 1].apple,
      snake: currentArray[reversedArray.length - 1].snake,
      head: false,
    }
  }
  setSnake(currentArray)
}
