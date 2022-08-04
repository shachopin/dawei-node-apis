function boggleBoard(board, words) {
  // Write your code here.
	const result = [];
	const root = buildTrie(words);
	const visited = board.map(row => row.map(value => false));
	for (let i = 0; i < board.length; i++){
		for (let j = 0; j < board[0].length; j++) {
			dfs(result, board, i, j, visited, root);
		}
	}
	return result;
}

const dx = [0, 1, -1, 0, 1, -1, -1, 1];
const dy = [1, 0, 0, -1, -1, 1, -1, 1];
const dirLength = dx.length;

function dfs(result, board, x, y, visited, root) {
	const charToGet = board[x][y];
	const index = charToGet.charCodeAt(0) - 'a'.charCodeAt(0);
	if (root.children[index] == null) {
		return;
	}
	root = root.children[index];
	if (root.isWord) {
		result.push(root.word);
		root.isWord = false;
	}
	
	visited[x][y] = true;
	
	for (let i = 0; i < dirLength; i++) {
		const newX = x + dx[i];
		const newY = y + dy[i];
		if (!isValid(newX, newY, board)) {
			continue;
		}
		if (visited[newX][newY]) {
			continue;
		}
		dfs(result, board, newX, newY, visited, root);
		
	}
	visited[x][y] = false;
}

function isValid(newX, newY, board) {
	if (newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length) {
		return false;
	}
	return true;
}

function buildTrie(words) {
	const root = new TrieNode();
	for (let word of words) {
		let current = root;
		for (let char of word) {
			const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
			if (current.children[index] == null) {
				current.children[index] = new TrieNode();
			}
			current = current.children[index];
		}
		current.isWord = true;
		current.word = word;
	}
	return root;
}

class TrieNode {
	constructor() {
		this.children = new Array(26).fill(null);
		this.isWord = false;
		this.word = "";
	}
}

export default boggleBoard;


/* req body
{
"board": [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"]
],

"words":  ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
}



res body

{
  "result": [
      "this",
      "is",
      "simple",
      "a",
      "boggle",
      "board",
      "NOTRE-PEATED"
  ]
}
*/
