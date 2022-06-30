export const getArrayOfPages = (items, limit) => {
	const arr = []
	for (let i = 0; i < Math.ceil(items / limit); i++) {
		arr.push(i)
	}
	return arr
}