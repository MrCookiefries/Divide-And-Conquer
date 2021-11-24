function countZeroes(nums) {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;

	if (nums[leftIdx] === 0) return nums.length;

	while (leftIdx <= rightIdx) {
		const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

		if (nums[middleIdx] === 1) {
			leftIdx = middleIdx + 1;
		} else {
			if (nums[middleIdx - 1] === 1) {
				return nums.length - middleIdx;
			} else {
				rightIdx = middleIdx - 1;
			}
		}
	}

	return 0;
}

module.exports = countZeroes;
