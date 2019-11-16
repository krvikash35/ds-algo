/*
QUEUE: linear data structure in which data is added from one end and removed from opposite end.
It can be implemented using two stack or just linked list.

PROS & CONS:
efficient insertion & deletion but inefficient search

COMPLEXITY:
enqueue: O(1)
dequeue: O(1)
*/

class Queue {
    constructor() {
      this.newStack = [];
      this.oldStack = [];
    }
  
    _shift() {
      if (this.oldStack.length === 0) {
        while (this.newStack.length !== 0) {
          this.oldStack.push(this.newStack.pop());
        }
      }
    }
  
    enqueue(data) {
      console.log('enqueue', data)
      this.newStack.push(data);
    }
  
    dequeue() {
      console.log('dequeue')
      this._shift();
      this.oldStack.pop();
    }
  
    print(){
  
    }
  }
  
  const q = new Queue();
  q.dequeue();
  q.enqueue(1);
  
  q.print()
  
  q.dequeue();
  
  q.enqueue(5);
  q.enqueue(1);
  q.enqueue(8);
  
  q.print()
  q.dequeue();
  