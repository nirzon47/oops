class Product {
	constructor(name, price, stock) {
		this.name = name
		this.price = price
		this.stock = stock
	}
}

class Person {
	constructor(name, email, cart) {
		this.name = name
		this.email = email
		this.cart = cart
	}
}

class Cart {
	constructor() {
		this.products = []
	}
}

const phone = new Product('phone', 70000, 50)
const earphone = new Product('earphone', 20000, 100)
const laptop = new Product('laptop', 200000, 10)

console.log('Product list \n', phone, '\n', earphone, '\n', laptop)
console.log('-------------------')

const nirzon = new Person('Nirzon', 'nirzon@nirzon', new Cart())

nirzon.cart.products.push(phone)
nirzon.cart.products.push(phone)
nirzon.cart.products.push(earphone)
nirzon.cart.products.push(laptop)

console.log('Current user: \n', nirzon)
console.log('-------------------')
console.log('Users cart: \n', nirzon.cart)
