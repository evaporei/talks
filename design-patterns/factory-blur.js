try {
	const transaction = new TransactionValidator(req.body)

	const data = new TransactionBusiness(transaction)

	return new TransactionPresenter(res, data)// res é passado para enviar a resposta
} catch (error) {
	if (error instanceof ValidatorError) {
		return new ValidationErrorHandler(res, error)
	}
	if (error instanceof BusinessError) {
		return new BusinessErrorHandler(res, error)
	}
	if (error instanceof PresenterError) {
		return new PresenterErrorHandler(res, error)
	}

	return new GenericErrorHandler(res, error)
}

class AnimalFactory {
	constructor () {
		this.result = this.randomCode.callStupidFunction()
		this.hasCalculated = true
		return this.result + 'whatever'
	}
	talk () {
		console.log('I can\'t talk')
	}
	roar () {
		console.log(this.phrase)
	}
}

const transaction = new TransactionValidator(req.body)
const data = new TransactionBusiness(transaction)

new TransactionPresenter(res, data)// res é passado para enviar a resposta

