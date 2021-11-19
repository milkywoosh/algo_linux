function Node(data, left=null, right=null) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data) {
	let current = this.root;
	console.log("current: ", current)
	let n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else if (this.root !== null) {
		
		let searchNode = (node) => {

			if (data < node.data) {
				if (node.left === null) {
					node.left = n;
				} else if (node.left !== null) {
					return searchNode(node.left);
				}
			} else if (data > node.data) {
				if (node.right === null) {
					node.right = n;
				} else if (node.right !== null) {
					return searchNode(node.right);
				} 
			}

		}

		return searchNode(current)
	}
}


function inOrder(node) {
	if (node === null) return;
	inOrder(node.left);
	console.log(node.show() );
	inOrder(node.right);
	
}

const nums = new BST();

nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22);
nums.insert(19); 
console.log("Inorder traversal: "); 
inOrder(nums.root);