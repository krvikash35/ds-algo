/*
STACK: It is kind of data structure in new data is pushed/removed on/from top.

PROS & CONS:
Efficient insertion & deletion but inefficient search/access

COMPLEXITY:
push: O(1)
pop: O(1)
search: O(n)
*/

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  //add data to top
  push(data) {
    console.log("push " + data);
    const node = new Node(data);
    if (this.top === null) {
      this.top = node;
      return;
    }
    node.prev = this.top;
    this.top = node;
  }

  //remove data from top
  pop() {
    console.log("pop");
    if (this.top === null) {
      return null;
    }
    const data = this.top.data;
    this.top = this.top.prev;
    return data;
  }

  print() {
    let list = [];
    let current = this.top;
    while (current !== null) {
      list.push(current.data);
      current = current.prev;
    }
    console.log("print: top->", list.join("->"));
  }
}

const s = new Stack();

s.push(11);
s.push(12);
s.push(13);
s.push(14);

s.print();

s.pop();
s.pop();
s.print();
