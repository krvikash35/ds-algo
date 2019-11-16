class Heap {
  constructor() {
    this.items = [];
  }
  // return the first element
  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return items[0];
  }

  // delete the first element
  poll() {
    if (this.items.length === 0) {
      return;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const data = this.items[0];
    this.items[0] = this.items.pop();
    this._heapifyDown();
    return data;
  }

  // add to last
  add(data) {
    this.items.push(data);
    this._heapifyUp();
  }

  _heapifyDown() {
    let current = 0;
    while (true) {
      if (this._hasLeft(current)) {
        const leftIndex = this._getLeft(current);
        if (this.items[current] > this.items[leftIndex]) {
          this._swap(current, leftIndex);
          current = leftIndex;
          continue;
        }
      }
      if (this._hasRight(current)) {
        const rightIndex = this._getRight(current);
        if (this.items[current] > this.items[rightIndex]) {
          this._swap(current, rightIndex);
          current = rightIndex;
          continue;
        }
      }
      break;
    }
  }

  _heapifyUp() {
    let current = this.items.length - 1;
    while (current > 0) {
      const parentIndex = this._getParentIndex(current);
      if (this.items[current] < this.items[parentIndex]) {
        this._swap(current, parentIndex);
      } else {
        break;
      }
      current = parentIndex;
    }
  }

  _swap(first, second) {
    const temp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = temp;
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  _hasLeft(index) {
    return this._getLeft(index) < this.items.length;
  }

  _hasRight(index) {
    return this._getRight(index) < this.items.length;
  }

  _getLeft(index) {
    return index * 2 + 1;
  }

  _getRight(index) {
    return index * 2 + 2;
  }

  print() {}
}

const heap = new Heap();

heap.add(10);
heap.add(20);
heap.add(30);
console.log(heap);

heap.add(15);
console.log(heap);
heap.add(5);
console.log(heap);

heap.poll()
console.log(heap)
