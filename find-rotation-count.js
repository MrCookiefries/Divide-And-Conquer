function findRotationCount(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const middle = Math.floor((start + end) / 2);

		if (arr[middle] < arr[middle - 1]) {
			return middle;
		}
		if (arr[start] <= arr[middle]) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}
	return 0;
}

module.exports = findRotationCount;
