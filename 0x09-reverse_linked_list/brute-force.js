class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    // adds a node to a singly lined list at the end
    let newNode = new Node(value);
    if (!this.head){
      // the list is empty: make this node the head and the tail
      this.head = newNode;
      this.tail = newNode;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse(){
    // prints an array like representation for the list
    let current = this.head;
    let arr = [];
    while (current){
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}
const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);
sll.traverse()
console.log(sll);

// reverse SinglyLinkedList
// 1 -> 2c -> 3nt -> 4 -> 5
// next of the next node to point to the current node
// reset the current to be next
// reset next to be tmp

const reverseSinglyLinkedList = head => {
  let currentNode = head;
  while (currentNode){
    const nextNode = currentNode.next;
    if (nextNode){
      const tmpNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = tmpNode;
    }
  }
}
