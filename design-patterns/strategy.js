class Potato {
  constructor () {
    this.foodName = 'potato'
  }
  setCookStrategy (cookStrategy) {
    this.cookStrategy = cookStrategy
  }
  cook () {
    this.cookStrategy.cook(this.foodName)
  }
}

class Boiled {
  cook (foodName) {
    console.log(`Boiling ${foodName}!`)
  }
}

class Fried {
  cook (foodName) {
    console.log(`Frying ${foodName}!`)
  }
}

const potato = new Potato()

potato.setCookStrategy(new Boiled())
potato.cook() // Boiling potato!

potato.setCookStrategy(new Fried())
potato.cook() // Frying potato!

