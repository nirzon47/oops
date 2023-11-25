class Product {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {string} name - The name of the object.
	 * @param {number} price - The price of the object.
	 * @param {number} stock - The stock of the object.
	 */
	constructor(name, price, stock) {
		this.name = name
		this.price = price
		this.stock = stock
	}
}

class Person {
	/**
	 * Creates a new instance of the constructor.
	 *
	 * @param {string} name - The name of the person.
	 * @param {string} email - The email address of the person.
	 * @param {array} cart - The cart items of the person.
	 */
	constructor(name, email, cart) {
		this.name = name
		this.email = email
		this.cart = cart
	}
}

class Cart {
	/**
	 * Initializes a new instance of the class.
	 */
	constructor() {
		this.products = []
		this.total = 0
	}

	/**
	 * Adds a product to the list of products and updates its stock.
	 *
	 * @param {Object} product - The product to be added.
	 * @return {undefined} - This function does not return a value.
	 */
	addProduct(product) {
		this.products.push(product)

		product.stock--
		this.getTotal()
	}

	/**
	 * Remove a product from the list of products.
	 *
	 * @param {Object} product - The product to be removed.
	 * @return {undefined} - This function does not return anything.
	 */
	removeProduct(product) {
		const index = this.products.indexOf(product)
		if (index > -1) {
			this.products.splice(index, 1)
		}

		product.stock++
		this.getTotal()
	}

	/**
	 * Calculates the total value of the products.
	 *
	 * @return {number} The total value of the products.
	 */
	getTotal() {
		let total = 0
		for (let i = 0; i < this.products.length; i++) {
			total += this.products[i].price
		}

		this.total = total
	}

	/**
	 * Initializes the checkout process by setting up an empty list of products and a total of 0.
	 *
	 */
	checkout() {
		this.products = []
		this.total = 0
	}
}

const phone = new Product('phone', 70000, 50)
const earphone = new Product('earphone', 20000, 100)
const laptop = new Product('laptop', 200000, 10)

console.log('Product list \n', phone, '\n', earphone, '\n', laptop)
console.log('-------------------')

const nirzon = new Person('Nirzon', 'nirzon@nirzon', new Cart())

console.log('Current user: \n', nirzon)
console.log('-------------------')

nirzon.cart.addProduct(phone)
nirzon.cart.addProduct(earphone)
nirzon.cart.addProduct(laptop)
// nirzon.cart.getTotal()

console.log('Users cart: \n', nirzon.cart)
console.log('-------------------')

nirzon.cart.removeProduct(earphone)
console.log('**Removed earphone** \n', nirzon.cart)
console.log('-------------------')

console.log('Product list \n', phone, '\n', earphone, '\n', laptop)
console.log('-------------------')

console.log('Total: ', nirzon.cart.total)
console.log('-------------------')

console.log('Checking out.......')
nirzon.cart.checkout()

console.log('Updated cart: \n', nirzon.cart)
