/*
You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].
Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

Example 1:
	Input: nums = [18,43,36,13,7]
	Output: 54
	Explanation: The pairs (i, j) that satisfy the conditions are:
		- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
		- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
		So the maximum sum that we can obtain is 54.
Example 2:
	Input: nums = [10,12,19,14]
	Output: -1
	Explanation: There are no two numbers that satisfy the conditions, so we return -1.

Constraints:
	1 <= nums.length <= 10^5
	1 <= nums[i] <= 10^9

Topics: Array, Hash Table, Sorting, Heap (Priority Queue)
*/

const maximumSum = (nums) => {
	const map = {};
	let max = 0;

	for (let num of nums) {
		let digit = num.toString().split('');
		let sum = digit.reduce((a, b) => a + parseInt(b), 0);
		if (map[sum]) {
			map[sum].push(num);
		} else {
			map[sum] = [num];
		}
	}

	for (let key in map) {
		const value = map[key];
		if (value.length >= 2) {
			const [a, b] = value.sort((a, b) => b - a);
			max = Math.max(max, a + b);
		}
	}

	return max || -1;
};

console.log(maximumSum([18, 43, 36, 13, 7]));
console.log(maximumSum([10, 12, 19, 14]));
console.log(
	maximumSum([
		368, 369, 307, 304, 384, 138, 90, 279, 35, 396, 114, 328, 251, 364, 300, 191, 438,
		467, 183,
	]),
);
