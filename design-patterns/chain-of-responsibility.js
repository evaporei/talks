class Padawan {
  constructor () {
    this.master = new Knight()
  }
  fight (monster) {
    if (monster.strength > 10) {
      console.log('I am too weak for this :(')
      return this.callMasterToFight(monster)
    }

    this.punch()
  }
  callMasterToFight (monster) {
    this.master.fight(monster)
  }
  punch () {
    console.log('A weak padawan punch!')
  }
}

class Knight {
  constructor () {
    this.master = new Master()
  }
  fight (monster) {
    if (monster.strength > 100) {
      console.log('I am too weak for this :(')
      return this.callMasterToFight(monster)
    }

    this.swingLightSaber()
  }
  callMasterToFight (monster) {
    this.master.fight(monster)
  }
  swingLightSaber () {
    console.log('Schvrmmmmmmm!')
  }
}

class Master {
  fight (monster) {
    this.useTheForce()
  }
  callMasterToFight (monster) {
    throw new Error('I am the ultimate master!')
  }
  useTheForce () {
    console.log('You\'re finished!')
  }
}

const weakMonster = { strength: 7 }
const padawan = new Padawan()
padawan.fight(weakMonster)
// Padawan: A weak padawan punch!

const averageMonster = { strength: 60 }
padawan.fight(averageMonster)
// Padawan: I am too weak for this :(
// Knight: Schvrmmmmmmm!

const ultraMonster = { strength: 560 }
padawan.fight(ultraMonster)
// Padawan: I am too weak for this :(
// Knight: I am too weak for this :(
// Jedi: You're finished!

padawan.master.master.callMasterToFight()
// Master: Error('I am the ultimate master!')
