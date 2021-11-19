function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}


function dispReverse() {
  let currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous == null)) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}

function findLast() {
  let currNode = this.head;
  while(!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  let currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}


function display() {
  let currNode = this.head;
  while(!(currNode.next == null)) {
    // console.log(currNode);
  
    currNode = currNode.next;
  }
}

function find(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

let number = new LList();
number.insert(1, 'head');
number.insert(2, 1);
number.insert(3, 2);
number.insert(4, 3);

// console.log(number.display());
console.log(number.dispReverse())

