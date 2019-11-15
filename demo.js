/*
LINKED LIST: 
It is linear data structure(kind of list), in which each data point(genrally called Node) is connected
to previous data point through some link(reference to memory address).

PROS:
1. Efficient insertion and deletion

CONS:
1. Linear access/search is not good
2. Random access is not feasible.
3. Cache locality is not good compared to array.

COMPLEXITY:
Access: O(n)
Search: O(n)
Insertion(Prepend): O(1)
Insertion(Append): O(n)
Deletion: O(n)

*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result = result + "->" + current.data;
      current = current.next;
    }
    console.log(result);
  }

  // insert data at end of list
  append(data) {
    console.log('append', data)
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  // insert data at begining of list
  prepend(data) {
    const node = new Node(data);
    if (this.head === null) {
      return (this.head = null);
    }
    node.next = this.head;
    this.head = node;
  }

  // delete data
  delete(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    let current = this.head;
    let prev = null;
    while (current.next !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }
    prev.next = prev.next.next;
  }
}

const ll = new LinkedList();

ll.append(2);
ll.append(12);
ll.append(1);
ll.print();

ll.prepend(15);
ll.print();

ll.delete(2);
ll.print();
ll.delete(1);
ll.print();
