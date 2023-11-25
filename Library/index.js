const library = []

class Book {
	constructor(title, author, isAvailable = true) {
		this.title = title
		this.author = author
		this.isAvailable = isAvailable
	}

	checkAvailability() {
		return this.isAvailable
	}
}

class Person {
	constructor(name, email, type = 'member') {
		this.name = name
		this.email = email
		this.type = type
		if (type === 'member') {
			this.borrowedBooks = []
		}
	}

	addBorrowedBook(book) {
		this.borrowedBooks.push(book)
		book.isAvailable = false
	}

	removeBorrowedBook(book) {
		const index = this.borrowedBooks.indexOf(book)
		if (index > -1) {
			this.borrowedBooks.splice(index, 1)
		}

		book.isAvailable = true
	}

	addBook(book) {
		if (this.type === 'member') {
			return
		}

		library.push(book)
	}

	removeBook(book) {
		if (this.type === 'member') {
			return
		}

		const index = library.indexOf(book)
		if (index > -1) {
			library.splice(index, 1)
		}
	}
}

console.log('Adding staff....')

const staff = new Person('Staff 1', 'staff@staff.com', 'staff')

console.log('Staff list: \n', staff)
console.log('------------------------------')

console.log('Adding books....')

staff.addBook(new Book('Book 1', 'Author 1'))
staff.addBook(new Book('Book 2', 'Author 2'))
staff.addBook(new Book('Book 3', 'Author 3'))

console.log('Book list: \n', library)
console.log('------------------------------')

console.log('Adding members....')

const nirzon = new Person('Nirzon', 'nirzon@nirzon.com')

console.log('Member list: \n', nirzon)
console.log('------------------------------')

console.log('Checking if Book 1 is available....')
console.log(library[0].checkAvailability())
console.log('------------------------------')

console.log('Borrowing Book 1....')
nirzon.addBorrowedBook(library[0])
console.log('------------------------------')

console.log('Checking if Book 1 is available....')
console.log(library[0].checkAvailability())
console.log('------------------------------')

console.log("Nirzon's borrowed books: \n", nirzon.borrowedBooks)
console.log('------------------------------')

console.log('Updated Book list: \n', library)
console.log('------------------------------')

console.log('Returning Book 1....')
nirzon.removeBorrowedBook(library[0])

console.log("Nirzon's borrowed books: \n", nirzon.borrowedBooks)
console.log('------------------------------')

console.log('Updated Book list: \n', library)
console.log('------------------------------')

console.log('Removing Book 1....')
staff.removeBook(library[0])

console.log('Updated Book list: \n', library)
console.log('------------------------------')
