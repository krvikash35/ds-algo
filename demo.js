/*
DOUBLY LINKED LIST: 
It is linear data structure(kind of list), in which each data point(genrally called Node) is connected
to next and previous data point through some link(reference to memory address).

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
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log("print", result.join("->"));
  }

  // insert data at end of list
  append(data) {
    console.log("append", data);
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
    node.prev = current;
  }

  // insert data at begining of list
  prepend(data) {
    console.log("prepend", data);
    const node = new Node(data);
    if (this.head === null) {
      this.head = node
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  // delete data
  delete(data) {
    let msg = `delete ${data}: `;
    if (this.head === null) {
      console.log(msg + "error,head is null");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.head.prev = null;
      console.log(msg + "success");
      return;
    }
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        if(current.next === null){
          current.prev.next = null;
        }else{
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        console.log(msg + "success");
        return;
      }
      current = current.next;
    }
    console.log(msg + "error, not found");
    return;
  }

  // search data
  search(data) {
    let msg = `search ${data}: `;
    let current = this.head;
    while (current.next !== null) {
      if (current.data === data) {
        console.log(msg + true);
        return true;
      }
      current = current.next;
    }
    console.log(msg + false);
    return false;
  }
}

const ll = new LinkedList();

ll.append(2);
ll.append(12);
ll.append(1);
ll.append(31);
ll.append(13);
ll.append(11);
ll.print();

ll.search(12);
ll.search(22);

ll.delete(12);
ll.delete(2);
ll.delete(11);
ll.delete(22);
ll.print();

ll.prepend(15);
ll.print();
