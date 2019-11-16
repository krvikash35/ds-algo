/*
QUEUE: list data structure in which data is added from one end end(called tail) and removed from opposite end(called head).

COMPLEXITY:
enqueue: O(1)
qequeue: O(1)
search: O(n)
*/

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // add data to end of list
    enqueue(data) {
      console.log("enqueue", data);
      const node = new Node(data);
      if (this.tail === null) {
        this.tail = node;
        this.head = node;
        return;
      }
      this.tail.next = node;
      this.tail = node;
      return;
    }
  
    // remove data from beginning of list
    dequeue() {
      console.log("dqueue");
      if (this.head === null) {
        return;
      }
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      }
      this.head = this.head.next;
    }
  
    //print the list
    print() {
      let list = ["head"];
      let current = this.head;
      while (current !== null) {
        list.push(current.data);
        current = current.next;
      }
      list.push("tail");
      console.log("print: ", list.join("->"));
    }
  }
  
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  q.print();
  
  q.dequeue();
  q.dequeue();
  q.print();
  
  q.enqueue(6);
  q.enqueue(7);
  q.print();
  