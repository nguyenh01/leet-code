/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
							1 -> 2 -> 4
							1 -> 3 -> 4
				1 -> 1 -> 2 -> 3 -> 4 -> 4
	Input: list1 = [1,2,4], list2 = [1,3,4]
	Output: [1,1,2,3,4,4]

Example 2:
	Input: list1 = [], list2 = []
	Output: []
Example 3:
	Input: list1 = [], list2 = [0]
	Output: [0]

Constraints:
	The number of nodes in both lists is in the range [0, 50].
	-100 <= Node.val <= 100
	Both list1 and list2 are sorted in non-decreasing order.

Topics: Linked List, Recursion
*/

class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

const createList = (arr) => {
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
};

const printList = (list) => {
	let current = list;
	let result = [];
	while (current !== null) {
		result.push(current.val);
		current = current.next;
	}
	return result.join(' -> ');
};

const mergeTwoLists = (list1, list2) => {
	let head = new ListNode(-1);
	let current = head;

	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}

	current.next = list1 !== null ? list1 : list2;
	return head.next;
};

// Recursion
const mergeTwoLists_Recursion = (list1, list2) => {
	if (!list1) return list2;
	if (!list2) return list1;

	while (list1 !== null && list2 != null) {
		if (list1.val <= list2.val) {
			list1.next = mergeTwoLists(list1.next, list2);
			return list1;
		} else {
			list2.next = mergeTwoLists(list2.next, list1);
			return list2;
		}
	}
};

console.log(mergeTwoLists(createList([1, 2, 4]), createList([1, 2, 3])));
console.log(mergeTwoLists(createList([]), createList([])));
console.log(mergeTwoLists(createList([]), createList([0])));

console.log(mergeTwoLists_Recursion(createList([1, 2, 4]), createList([1, 2, 3])));
console.log(mergeTwoLists_Recursion(createList([]), createList([])));
console.log(mergeTwoLists_Recursion(createList([]), createList([0])));

console.log(printList(mergeTwoLists(createList([1, 2, 4]), createList([1, 2, 3]))));
