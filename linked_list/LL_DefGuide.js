function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head"); // for hanging
  this.root = this.head;
  this.addAt = addAt; // PERLU DIPAHAMI LEBIH DALAM !!!
  this.length = 0;
  this.len = len;
  this.isPresent = isPresent;
  this.add = add;
  // this.remove = remove;
  this.display = display;
  this.indexOf = indexOf;
}


// FIX CODE
// counting length started from first as 1 not 0(bcs 0 for index)
function len() {
  let currNode = this.root;// this.root has 1 element so we already have 1 element;
  let length = this.length;// shud be add 1;
  length += 1;
  while (currNode.next != null) {
    currNode = currNode.next;
    length++;
  }
  return length;
}



// FIX CODE
function isPresent(item) {
  let currNode = this.root;
  
  while ( currNode ) {
    if (currNode.element == item) return true;
    currNode = currNode.next;
  }
  return -1;
}

// FIX CODE
function indexOf(item) {
    currNode = this.root;
    currIndex = 0;

    while (currNode) {
      if (currNode.element == item) return currIndex;
      currNode = currNode.next;
      currIndex++;
    }

    return -1;
}


// FIX CODE  : BELOM FULLY UNDERSTAND !!
function addAt(index, element) {
  let node = new Node(element);
  let currNode = this.root;
  let prevNode;
  let currIndex = 0;
  let totalLength = number.len();;


  if (index > totalLength)  {
    // console.log(`the index ${index} is not exist !!!!`) ;
    return null;
  }

  if (index == 0) {
    node.next = currNode; 
    
    this.root = node;
        /*
        // VISUALIZATION
        this.root = node: Node{ element: 'x', null: Node {element: 'head', next: Node {element: 1, 
        next: Node { element: 2, next: null }}}}
        */

  } else { 

    // Node { element: 100, next: null }
    while (currIndex < index  && currNode.next !== null) {
        // if (index < number.len()) {
          currIndex++; // -> 1;
          prevNode = currNode;
          /*
          // VISUALIZATION
            prevNode = node: Node{ element: 'x', null: Node {element: 'head', next: Node {element: 1, 
            next: Node { element: 2, next: null }}}}
          
            currNode = Node {element: 'head', next: Node {element: 1, 
            next: Node { element: 2, next: null }}}
        // } 
        */
        currNode = currNode.next;
    } 

    node.next = currNode;
            /*Node { element: 100, 
            next: Node {element: 'head', next: Node {element: 1, 
            next: Node { element: 2, next: null }}}
            }*/

    prevNode.next = node
      /*Node { element: 'x',
            next: Node { element: 100, 
                          next: Node {element: 'head', 
                                      next: Node {element: 1, 
                                                  next: Node { element: 2, 
                                                              next: null }}}
        }
      }*/
    
    // percobaan !!! if wrong, just delete
    // this.root = prevNode;
  
  }
}
/*
// VISUALIZATION
('x', 0);
Node {element: 'x', next: null }
Node {element: 'head', 
      next: Node {element: 1, 
                  next: Node { element: 2, next: null }}}
*/


// FIX CODE
function add(item) {
  let currNode = this.root;
  let newElement = new Node(item);
  
    if (currNode == null ) {
      this.root = newElement; 
    } else if (currNode != null) {
      function nextNode(currNode) {
        if (currNode.next == null) {
          currNode.next = newElement;
          
        } else if (currNode.next != null) {
          return nextNode(currNode.next);
        }
      }

      return  nextNode(currNode);
    }

}

// FIX CODE
function display() {
  let arrStore  = new Array();
  let currNode = this.root;
  // arrStore.push(currNode.element);
  while ( currNode.next != null ) {
    console.log('element: ', currNode.element);
    // console.log('next: ', currNode.next.element);
    currNode = currNode.next;
    // arrStore.push(currNode.element);
  }

  return arrStore;
}

const number = new LList();
// console.log(number.find('head'));
// number.add(1, 'head');
// number.add(2 ,1);
// number.add(2 ,2);
// number.add(3 ,2);
// number.add(4, 3);

number.add(1);
number.add("two");
number.add(3);
number.add(4);
// add at index, value;
// number.addAt(2, 10);
// number.addAt(3, 11);
// number.addAt(4, 11);
// number.addAt(0, 'x');
// number.add(300);
// number.addAt(8, 400);


// let value = "x";
// console.log(`${value} isPresent: `, number.isPresent(value));   
// console.log(`index of ${value}:` , number.indexOf(value));
console.log(number.display());
console.log('length: ', number.len());// 