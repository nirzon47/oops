// Filter

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mineFilter = (list, func) => {
	let result = []
	for (let i = 0; i < list.length; i++) {
		if (func(list[i])) {
			result.push(list[i])
		}
	}
	return result
}

console.log(
	'mineFilter result',
	list.mineFilter(list, (x) => x % 2 === 0)
)

// Reduce

Array.prototype.mineReduce = (list, func) => {
	let result = list[0]

	for (let i = 1; i < list.length; i++) {
		result = func(result, list[i])
	}

	return result
}

console.log(
	'mineReduce result',
	list.mineReduce(list, (sum, num) => sum + num)
)
