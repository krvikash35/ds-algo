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
      this.newStack.push(data);
    }
  
    dequeue() {
      this._shift();
      console.log( this.oldStack.pop())
    }
  }
  
  const q = new Queue();
   q.dequeue();
   q.enqueue(1)
   q.dequeue()
   q.enqueue(5)
   q.enqueue(1)
   q.enqueue(8)
   console.log(q)
   q.dequeue()
   console.log(q)