function findFloor(arr, x) {
	let low = 0;
	let high = arr.length - 1;
	let middle;

	while (low <= high) {
		middle = Math.floor((low + high) / 2);

		if (arr[middle] === x) return arr[middle];
		if (arr[middle] > x) {
			high = middle - 1;
		} else {
			if (arr[middle + 1] > x) return arr[middle];
			low = middle + 1;
		}
	}

	return arr[middle] < x ? arr[middle] : -1;
}

module.exports = findFloor;
