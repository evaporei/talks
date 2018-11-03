class Calculator {
  doExpensiveCalculation () {
    return 1 + 1
  }
}

class CalculatorDecorator {
  constructor () {
    this.hasCalculated = false
    this.realCalculator = new Calculator()
  }
  doExpensiveCalculation () {
    if (!this.hasCalculated) {
      this.result = this.realCalculator.doExpensiveCalculation()
      this.hasCalculated = true
      return this.result
    }
    return this.result
  }
}

const calculator = new Calculator()

calculator.doExpensiveCalculation() // calculates 2
calculator.doExpensiveCalculation() // calculates 2

const decorator = new CalculatorDecorator()

decorator.doExpensiveCalculation() // calculates 2
decorator.doExpensiveCalculation() // gets cache 2
