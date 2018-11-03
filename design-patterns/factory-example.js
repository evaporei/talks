const animalFactory = (name, domestic) =>
  ({ name, domestic })

// 🐢
const turtle = animalFactory('turtle', true)

// 🐧
const penguin = animalFactory('penguin', false)

// 🦈
const shark = animalFactory('shark', false)
