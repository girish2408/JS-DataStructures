class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while(last.next) {
    last = last.next;
  }
  last.next = newNode;
};

LinkedList.prototype.insertAfter = function(prevNode, data) {
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}
