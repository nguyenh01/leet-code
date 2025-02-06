/*
Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

Example 1:
	Input: nums = [2,3,4,6]
	Output: 8
	Explanation: There are 8 valid tuples:
		(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
		(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
Example 2:
	Input: nums = [1,2,4,5,10]
	Output: 16
	Explanation: There are 16 valid tuples:
		(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
		(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
		(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
		(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

Constraints:
	1 <= nums.length <= 1000
	1 <= nums[i] <= 10^4
	All elements in nums are distinct.

Topics: Array, Hash Table, Counting
*/

const tupleSameProduct = (nums) => {
	let productMap = {};
	let count = 0;
	let numsLength = nums.length;

	for (let i = 0; i < numsLength; i++) {
		for (let j = i + 1; j < numsLength; j++) {
			let product = nums[i] * nums[j];
			if (productMap[product]) {
				productMap[product] += 1;
			} else {
				productMap[product] = 1;
			}
		}
	}

	for (let p in productMap) {
		const product = productMap[p];
		if (product > 1) {
			count += ((product * (product - 1)) / 2) * 8; // C(product,2) * 8;
		}
	}

	return count;
};

console.log(tupleSameProduct([2, 3, 4, 6]));
console.log(tupleSameProduct([1, 2, 4, 5, 10]));
