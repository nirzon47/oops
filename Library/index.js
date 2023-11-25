const library = []

class Book {
	/**
	 * Initializes a new instance of the Book class.
	 *
	 * @param {string} title - The title of the book.
	 * @param {string} author - The author of the book.
	 * @param {boolean} [isAvailable=true] - Indicates if the book is available.
	 */
	constructor(title, author, isAvailable = true) {
		this.title = title
		this.author = author
		this.isAvailable = isAvailable
	}

	/**
	 * Checks the availability of the object.
	 *
	 * @return {boolean} The availability of the object.
	 */
	checkAvailability() {
		return this.isAvailable
	}
}

class Person {
	/**
	 * Constructor for creating a new instance of the class.
	 *
	 * @param {string} name - The name of the person.
	 * @param {string} email - The email address of the person.
	 * @param {string} [type='member'] - The type of person.
	 * @return {undefined} This is a constructor, it does not return any value.
	 */
	constructor(name, email, type = 'member') {
		this.name = name
		this.email = email
		this.type = type
		if (type === 'member') {
			this.borrowedBooks = []
		}
	}

	/**
	 * Adds a borrowed book to the list of borrowed books and updates the availability status of the book.
	 *
	 * @param {Object} book - The book object to be added to the list of borrowed books.
	 * @return {undefined} This function does not return a value.
	 */
	/**
	 * Adds a borrowed book to the list of borrowed books and updates the availability status of the book.
	 *
	 * @param {Object} book - The book object to be added to the list of borrowed books.
	 * @return {undefined} This function does not return a value.
	 */
	addBorrowedBook(book) {
		this.borrowedBooks.push(book)
		book.isAvailable = false
	}

	/**
	 * Removes a borrowed book from the library.
	 *
	 * @param {Object} book - The book to be removed from the borrowedBooks list.
	 */
	removeBorrowedBook(book) {
		const index = this.borrowedBooks.indexOf(book)
		if (index > -1) {
			this.borrowedBooks.splice(index, 1)
		}

		book.isAvailable = true
	}

	/**
	 * Adds a book to the library.
	 *
	 * @param {type} book - the book to be added to the library
	 * @return {type} undefined
	 */
	addBook(book) {
		if (this.type === 'member') {
			return
		}

		library.push(book)
	}

	/**
	 * Removes a book from the library.
	 *
	 * @param {object} book - The book to be removed.
	 * @return {undefined} This function does not return any value.
	 */
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
