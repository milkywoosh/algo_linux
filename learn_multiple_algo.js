// https://betterprogramming.pub/8-common-data-structures-in-javascript-3d3537e69a27


// STACK
function Stack() {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }

    this.size = function () {
        return this.count;
    }
}



// QUEUE
function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    }
    this.enqueue = function (element) {
        collection.push(element);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }

    this.isEmpty = function () {
        return collection.length === 0;
    }
    this.size = function () {
        return collection.length;
    }
}


// PRIORITY QUEUE
function PriorityQueue() {

    // ... SAMBUNGAN DARI SEBELUMNYA

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }
}

var pQ = new PriorityQueue();
pQ.enqueue([gannicus, 3]);
pQ.enqueue([spartacus, 1]);
pQ.enqueue([crixus, 2]);
pQ.enqueue([oenomaus, 4]);
pQ.print();




// SET
function MySet() {
    var collection = [];
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }
    this.values = function () {
        return collection;
    }
    this.size = function () {
        return collection.length;
    }
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
    this.union = function (otherSet) {
        var unionSet = new MySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    }
    this.intersection = function (otherSet) {
        var intersectionSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    this.difference = function (otherSet) {
        var differenceSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    }
}



// HASH TABLE
function hash(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

function HashTable() {
    let storage = [];
    const storageLimit = 4;

    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }
}


// TRIE DSA
/** Node in Trie **/
function Node() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    }
}

function Trie() {
    this.root = new Node();
    this.add = function (input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }
    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }
    this.print = function () {
        let words = new Array();
        let search = function (node = this.root, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
}
