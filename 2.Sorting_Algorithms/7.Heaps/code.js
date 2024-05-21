class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    let tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  insert(item) {
    this.heap.push(item);
    index = this.heap.length - 1;
    parent = this.heap.parentIndex(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    this.item = this.heap.shift();
    this.heap.unshift(this.heap.pop());

    var index = 0;
    var leftChild = this.leftChildIndex(index);
    var rightChild = this.rightChildIndex(indexs);

    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      var max = leftChild;

      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }

      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return this.item;
  }
}
