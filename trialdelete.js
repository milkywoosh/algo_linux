// class Node {
// 	constructor(main, left=null, right=null) {
// 		this.main = main;
// 		this.left = left;
// 		this.right = right;
// 	}
// }


// class BST {
// 	constructor() {
// 		this.root = null;
// 		/*
// 		10
// 		3
// 		5
// 		remove(5) return node. --> this.root


// 		*/
// 	}

// 	add(data) {
// 		let currNode = this.root;
// 		let newNode = new Node(data);

// 		console.log(currNode);
		
// 		if (currNode=== null) {
// 			this.root = newNode;
// 			return;
// 		} else {

// 			function SearchNode(currNode) {

// 				if (data < currNode.main) {
// 					if (currNode.left === null) {
// 						currNode.left = newNode;
// 						return;
// 					} else if (currNode.left !== null) {
// 						return SearchNode(currNode.left);
// 					} 
// 				} else if (data > currNode.main) {
// 					if (currNode.right === null) {
// 						currNode.right = newNode;
// 						return;
// 					} else if (currNode.right !== null) {
// 						return SearchNode(currNode.right);
// 					}
// 				} else {
// 					return null;
// 				}
// 			}
// 			return SearchNode(currNode);
// 		}
// 	}

	

// 	findMin() {
// 		let currNode = this.root;

// 		while (currNode.left != null) {
// 			currNode = currNode.left;
// 		}
// 		return currNode.main;
// 	}

// 	findMax() {
// 		let currNode = this.root;

// 		while( (currNode.right != null)) {
// 			currNode = currNode.right;
// 		}
// 		return currNode.main;
// 	}

// 	isPresent(data) {
// 		let currNode = this.root;

// 		while (currNode) {
// 			if (data === currNode.main) {
// 				return true;
// 			}
// 			if (data < currNode.main) {
// 				currNode = currNode.left;
// 			}
// 			else {
// 				currNode = currNode.right;
// 			}
// 		}
// 		return false;
// 	}

// 	remove(data) {


// 		function removeNode(currNode, data) {
// 			// console.log(currNode);
// 			// currNode is null
// 			if (currNode === null) return null;
// 			// currNode is childless
			

// 			if (data === currNode.main) {
// 				console.log("currNode: ", currNode);
// 				// console.log(currNode);
// 				if (currNode.right === null && currNode.left === null) return null;

// 				if (currNode.right == null) {
// 					return currNode.left;
// 				}
// 				if (currNode.left == null) {
					
// 					return currNode.right;
// 				}
// 				if (currNode.left !== null && currNode.right !== null) {
// 					var tempNode = currNode.right;
// 					while (tempNode.left !== null) {
// 						tempNode = tempNode.left; // 25,22
// 					}

// 					currNode.main = tempNode.main;
// 					currNode.right = removeNode(currNode.right, tempNode.main);
// 					return currNode; 
					
// 				}


// 			}

// 			else if (data < currNode.main) {
// 				currNode.left = removeNode(currNode.left, data);
// 				return currNode;
// 			}
// 			else if (data > currNode.main) {
// 				currNode.right = removeNode(currNode.right, data);
// 				return currNode;
// 			}


// 		} // edge removeNode
// 		this.root = removeNode(this.root, data);// still null, and ready to assign with next add() method !!
// 		let cekNode = this.root;
// 		console.log("cekNode: ",cekNode);
// 	} //edge remove


// 	findMinHeight(currNode = this.root) {
//       if (currNode == null) {
//           return -1;
//       };
//       let left = this.findMinHeight(currNode.left);
//       let right = this.findMinHeight(currNode.right);
//       if (left < right) {
//           return left + 1;
//       } else {
//           return right + 1;
//       };
//   	}
//   	findMaxHeight(node = this.root) {
//       if (node == null) {
//           return -1;
//       };
//       let left = this.findMaxHeight(node.left);
//       let right = this.findMaxHeight(node.right);
//       if (left > right) {
//           return left + 1;
//       } else {
//           return right + 1;
//       };
//   	}
// }


// const bst = new BST();



// bst.add(10);
// bst.add(3);
// bst.add(5);


// // bst.add(10)
// // bst.add(3);
// // bst.add(8);
// // bst.add(7);
// // bst.add(9);

// bst.add(6);
// bst.remove(5);


// bst.add(7);
// bst.add(8);
// bst.add(9);
// // console.log(bst.isPresent());
// // console.log(bst.findMin()); // question: knp saat findMin() && remove() ada berbarengan malah gak jalan
// // console.log(bst.findMax());
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());



if (1 <= 1) {
	console.log(true);
}