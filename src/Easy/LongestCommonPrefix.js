/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
	Input: strs = ["flower","flow","flight"]
	Output: "fl"
Example 2:
	Input: strs = ["dog","racecar","car"]
	Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
	1 <= strs.length <= 200
	0 <= strs[i].length <= 200
	strs[i] consists of only lowercase English letters if it is non-empty.

Topics: String, Trie
*/

class TrieNode {
	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				node.children[char] = new TrieNode();
			}
			node = node.children[char];
		}
		node.isEndOfWord = true;
	}

	findLongestCommonPrefix() {
		let node = this.root;
		let lcp = '';
		while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
			let char = Object.keys(node.children)[0];
			lcp += char;
			node = node.children[char];
		}
		return lcp;
	}
}

const longestCommonPrefix = (strs) => {
	if (strs.length === 0) return '';

	let trie = new Trie();
	for (let str of strs) {
		trie.insert(str);
	}

	return trie.findLongestCommonPrefix();
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
