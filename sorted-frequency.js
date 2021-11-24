function sortedFrequency(arr, target) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	const firstIdx = (() => {
		if (arr[leftIdx] === target) return leftIdx;

		while (leftIdx <= rightIdx) {
			const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			const middleVal = arr[middleIdx];

			if (target > middleVal) {
				leftIdx = middleIdx + 1;
			} else if (target < middleVal) {
				rightIdx = middleIdx - 1;
			} else {
				if (arr[middleIdx - 1] < target) {
					return middleIdx;
				} else {
					rightIdx = middleIdx - 1;
				}
			}
		}
		return -1;
	})();

	leftIdx = 0;
	rightIdx = arr.length - 1;

	const lastIdx = (() => {
		if (arr[rightIdx] === target) return rightIdx;

		while (leftIdx <= rightIdx) {
			const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			const middleVal = arr[middleIdx];

			if (target > middleVal) {
				leftIdx = middleIdx + 1;
			} else if (target < middleVal) {
				rightIdx = middleIdx - 1;
			} else {
				if (arr[middleIdx + 1] > target) {
					return middleIdx;
				} else {
					leftIdx = middleIdx + 1;
				}
			}
		}
		return -1;
	})();

	if (firstIdx === -1 && lastIdx === -1) return -1;

	return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
