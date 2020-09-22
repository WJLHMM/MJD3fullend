const a = [[1, 2, 3], [[4, 5, 6], [7, 8, 9]]]
const b = a.map((item) => {
	if (item.length <= 1) {
		return item
	}
})

console.log(b)
