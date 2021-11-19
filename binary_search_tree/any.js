// functional
// dsa Node based
function Node(data, left=null, right=null) {
	this.data = data;
	this.left = left;
	this.right = right;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.add = add;
	this.isFound = isFound;
}

function add(data) {
	const currNode = this.root;
	let n = new Node(data);

	if (this.root === null) {
		this.root = new Node(data)
	} else if (this.root !== null) {

		const searchNode = (currNode) => {

			if (data < currNode.data) {
				if (currNode.left === null) {
					currNode.left = n;
				} else if (currNode.left !== null) {
					return searchNode(currNode.left)
				}
			} else if (data > currNode.data) {
				if (currNode.right === null) {
					currNode.right = n;
				} else if (currNode.right !== null) {
					return searchNode(currNode.right);
				}
			}
		}

		return searchNode(currNode);
	}

}

function isFound(data) {
	let currNode = this.root;

	while (currNode !== null) {
		if (currNode.data === data) {
			return true;
		} else if (data < currNode.data) {
			currNode = currNode.left;
		} else if (data > currNode.data) {
			currNode = currNode.right;
		}
	}
	return false;

}

const bst = new BST();

bst.add(35);
bst.add(23);
bst.add(21);
bst.add(19)
console.log("apakah ada angka 19: --->",bst.isFound(19)); // true
console.log("apakah ada angka 50 --->: ",bst.isFound(50)); // true




function add(data) {
	const currNode = this.root;
	let n = new Node(data); //35, 23, 21

	if (this.root === null) {
		this.root = new Node(data)
	} else if (this.root !== null) {

		const searchNode = (currNode) => {

			if (data < currNode.data) {
				if (currNode.left === null) {
					currNode.left = n; // 23, 21, 19
				} else if (currNode.left !== null) {
					return searchNode(currNode.left)
				}
			} else if (data > currNode.data) {
				if (currNode.right === null) {
					currNode.right = n;
				} else if (currNode.right !== null) {
					return searchNode(currNode.right);
				}
			}
		}

		return searchNode(currNode);
	}

}

// 						35 -
// 				23
// 			21       null
// 		19







