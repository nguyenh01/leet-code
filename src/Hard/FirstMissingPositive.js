/*
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
	Input: nums = [1,2,0]
	Output: 3
	Explanation: The numbers in the range [1,2] are all in the array.
Example 2:
	Input: nums = [3,4,-1,1]
	Output: 2
	Explanation: 1 is in the array but 2 is missing.
Example 3:
	Input: nums = [7,8,9,11,12]
	Output: 1
	Explanation: The smallest positive integer 1 is missing.

Constraints:
	1 <= nums.length <= 10^5
	-2^31 <= nums[i] <= 2^31 - 1
 */

const firstMissingPositive = (nums) => {
	let n = nums.length;

	for (let i = 0; i < n; i++) {
		while (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
			const correctIndex = nums[i] - 1;
			let temp = 0;
			temp = nums[i];
			nums[i] = nums[correctIndex];
			nums[correctIndex] = temp;
		}
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) return i + 1;
	}

	return n + 1;
};

console.log(firstMissingPositive([]));
console.log(firstMissingPositive([1]));
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([3, 4, 7, 1, -2, 5, 2]));
