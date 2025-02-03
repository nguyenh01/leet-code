/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
	Input: haystack = "sadbutsad", needle = "sad"
	Output: 0
	Explanation:
		"sad" occurs at index 0 and 6.
		The first occurrence is at index 0, so we return 0.
Example 2:
	Input: haystack = "leetcode", needle = "leeto"
	Output: -1
	Explanation: "leeto" did not occur in "leetcode", so we return -1.


Constraints:
	1 <= haystack.length, needle.length <= 10^4
	haystack and needle consist of only lowercase English characters.

Topics: Two Pointers, String, String Matching
*/

// const strStr = (haystack, needle) => haystack.indexOf(needle);

const strStr = (haystack, needle) => {
	if (needle === '') return 0;

	const haystackLength = haystack.length;
	const needleLength = needle.length;
	if (haystackLength < needleLength) return -1;

	for (let i = 0; i <= haystackLength - needleLength; i++) {
		let j = 0;
		while (j < needleLength && haystack[i + j] === needle[j]) {
			j++;
		}
		if (j === needleLength) return i;
	}

	return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('butsad', 'sad'));
console.log(strStr('aaaaa', 'bba'));
