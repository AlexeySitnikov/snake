export function orderLeftToRight({ snake }) {
  return snake.sort((a, b) => a.X > b.X)
}
