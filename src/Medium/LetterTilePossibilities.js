/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.
Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

Example 1:
	Input: tiles = "AAB"
	Output: 8
	Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:
	Input: tiles = "AAABBC"
	Output: 188
Example 3:
	Input: tiles = "V"
	Output: 1

Constraints:
	1 <= tiles.length <= 7
	tiles consists of uppercase English letters.

Topics: Hash Table, String, Backtracking, Counting
*/

const numTilePossibilities = (tiles) => {
	const map = {};

	const backtrack = (path, used) => {
		if (path.length > 0) {
			map[path] = map[path];
		}

		for (let i = 0; i < tiles.length; i++) {
			if (used[i]) continue;

			used[i] = true;
			backtrack(path + tiles[i], used);
			used[i] = false;
		}
	};

	backtrack('', Array(tiles.length).fill(false));
	return Object.keys(map).length;
};

console.log(numTilePossibilities('AAB'));
console.log(numTilePossibilities('AAABBC'));
console.log(numTilePossibilities('V'));
