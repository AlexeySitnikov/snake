import { height, width } from './fieldSize'

export function getInitialPosition() {
  const min = 0
  const verticalMax = height
  const horizontalMax = width

  const initialPosition = {
    vertical: false,
    horizontal: false,
    initialGridX: 0,
    initialGridY: 0,
  }
  if (Math.random() < 0.5) {
    initialPosition.horizontal = true
    const random = Math.floor((Math.random() * (horizontalMax - min) + min))
    if ((random > 5) && (random <= (horizontalMax - 5))) {
      initialPosition.initialGridX = random
      initialPosition.initialGridY = Math.floor(Math.random() * (verticalMax - min) + min)
    } else if (random <= 5) {
      initialPosition.initialGridX = 5
      initialPosition.initialGridY = Math.floor(Math.random() * (verticalMax - min) + min)
    } else if (random > (horizontalMax - 5)) {
      initialPosition.initialGridX = horizontalMax - 5
      initialPosition.initialGridY = Math.floor(Math.random() * (verticalMax - min) + min)
    }
  } else {
    initialPosition.vertical = true
    const random = Math.floor(Math.random() * (verticalMax - min) + min)
    if ((random > 5) && (random <= (verticalMax - 5))) {
      initialPosition.initialGridX = Math.floor(Math.random() * (horizontalMax - min) + min)
      initialPosition.initialGridY = random
    } else if (random <= 5) {
      initialPosition.initialGridX = Math.floor(Math.random() * (horizontalMax - min) + min)
      initialPosition.initialGridY = 5
    } else if (random > (verticalMax - 5)) {
      initialPosition.initialGridX = Math.floor(Math.random() * (horizontalMax - min) + min)
      initialPosition.initialGridY = verticalMax - 5
    }
  }
  return { initialPosition }
}

// example
// Math.random() * (max - min) + min
