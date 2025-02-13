/*
You are given a 0-indexed integer array nums, and an integer k.
In one operation, you will:
	Take the two smallest integers x and y in nums.
	Remove x and y from nums.
	Add min(x, y) * 2 + max(x, y) anywhere in the array.
Note that you can only apply the described operation if nums contains at least two elements.
Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

Example 1:
	Input: nums = [2,11,10,1,3], k = 10
	Output: 2
	Explanation:
		In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
		In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
		At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
		It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
Example 2:
		Input: nums = [1,1,2,4,9], k = 20
		Output: 4
		Explanation: After one operation, nums becomes equal to [2, 4, 9, 3].
		After two operations, nums becomes equal to [7, 4, 9].
		After three operations, nums becomes equal to [15, 9].
		After four operations, nums becomes equal to [33].
		At this stage, all the elements of nums are greater than 20 so we can stop.
		It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.

Constraints:
	2 <= nums.length <= 2 * 10^5
	1 <= nums[i] <= 10^9
	1 <= k <= 10^9
	The input is generated such that an answer always exists. That is, there exists some sequence of operations after which all elements of the array are greater than or equal to k.

Topics: Array, Heap (Priority Queue), Simulation
*/

class MinHeap {
	constructor() {
		this.heap = [];
	}

	size() {
		return this.heap.length;
	}

	push(val) {
		this.heap.push(val);
		this.heapifyUp();
	}

	pop() {
		if (this.size() === 1) return this.heap.pop();
		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown();
		return min;
	}

	peek() {
		return this.heap[0];
	}

	heapifyUp() {
		let index = this.size() - 1;
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			if (this.heap[parentIndex] <= this.heap[index]) break;
			[this.heap[parentIndex], this.heap[index]] = [
				this.heap[index],
				this.heap[parentIndex],
			];
			index = parentIndex;
		}
	}

	heapifyDown() {
		let index = 0;
		while (true) {
			let left = 2 * index + 1;
			let right = 2 * index + 2;
			let smallest = index;

			if (left < this.size() && this.heap[left] < this.heap[smallest]) {
				smallest = left;
			}
			if (right < this.size() && this.heap[right] < this.heap[smallest]) {
				smallest = right;
			}
			if (smallest === index) break;

			[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
			index = smallest;
		}
	}
}

const minOperations = (nums, k) => {
	const heap = new MinHeap();
	for (let num of nums) {
		heap.push(num);
	}

	let count = 0;
	while (heap.size() > 1 && heap.peek() < k) {
		const x = heap.pop();
		const y = heap.pop();
		const operation = Math.min(x, y) * 2 + Math.max(x, y);
		heap.push(operation);
		count++;
	}

	return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10));
console.log(minOperations([1, 1, 2, 4, 9], 20));
