/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
	1. Open brackets must be closed by the same type of brackets.
	2. Open brackets must be closed in the correct order.
	3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
	Input: s = "()"
	Output: true
Example 2:
	Input: s = "()[]{}"
	Output: true
Example 3:
	Input: s = "(]"
	Output: false
Example 4:
	Input: s = "([])"
	Output: true

Constraints:
	1 <= s.length <= 10^4
	s consists of parentheses only '()[]{}'.

Topics: String, Stack
*/

const isValid = (s) => {
	const stack = [];
	const bracketMap = {
		')': '(',
		'}': '{',
		']': '[',
	};

	for (let char of s) {
		if (bracketMap[char]) {
			if (stack.pop() !== bracketMap[char]) {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));
