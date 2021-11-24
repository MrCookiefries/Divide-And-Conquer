function findRotatedIndex(nums, num) {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;

	const pivotIdx = (() => {
		while (leftIdx <= rightIdx) {
			const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

			if (nums[middleIdx] > nums[middleIdx + 1]) {
				return middleIdx + 1;
			}
			if (nums[leftIdx] <= nums[middleIdx]) {
				leftIdx = middleIdx + 1;
			} else {
				rightIdx = middleIdx - 1;
			}
		}
		return 0;
	})();

	function binarySearch(arr, target, start, end) {
		while (start <= end) {
			const middle = Math.floor((start + end) / 2);

			if (arr[middle] === target) {
				return middle;
			}
			if (arr[middle] < target) {
				start = middle + 1;
			} else {
				end = middle - 1;
			}
		}
		return -1;
	}

	if (num === nums[pivotIdx]) return pivotIdx;
	if (pivotIdx > 0 && num >= nums[0] && num <= nums[pivotIdx - 1]) {
		return binarySearch(nums, num, 0, pivotIdx - 1);
	} return binarySearch(nums, num, pivotIdx, nums.length - 1);
}

module.exports = findRotatedIndex;
