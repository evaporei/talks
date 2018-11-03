class UpperCaseExpression {
  interpret (str) {
    return str === str.toUpperCase()
  }
}

class HasSpaceExpression {
  interpret (str) {
    return str.includes(' ')
  }
}

class AndExpression {
  constructor(expression1, expression2) {
    this.expression1 = expression1
    this.expression2 = expression2
  }
  interpret (str) {
    return this.expression1.interpret(str) && this.expression2.interpret(str)
  }
}

class OrExpression {
  constructor(expression1, expression2) {
    this.expression1 = expression1
    this.expression2 = expression2
  }
  interpret (str) {
    return this.expression1.interpret(str) || this.expression2.interpret(str)
  }
}

const upperCase = new UpperCaseExpression()
const hasSpace = new HasSpaceExpression()

const and = new AndExpression(upperCase, hasSpace)
const or = new OrExpression(upperCase, hasSpace)

and.interpret('has space but is not upper case') // false
or.interpret('has space but is not upper case') // true
