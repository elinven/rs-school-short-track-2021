/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
/* class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
} */
class Stack {
  /* constructor () {
    this.head = null;
    this.length = 0;
  } */

  push(/* element */) {
    throw new Error('Not implemented');
    /*
    // Если стек полон -- ошибка O(1)
    if (this.length === this.lastElementIndex + 1) {
      throw new Error('Stack is full');
    }

    // Добавление элемента в конец массива O(1)
    this.array[this.lastElementIndex + 1] = element;

    // Увеличение индекса последнего элемента O(1)
    this.length++;
  }

  /* push(element) {
    // throw new Error('Not implemented');
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = ;
    }
    this.length++;
    // return this; */
  }

  pop() {
    throw new Error('Not implemented');
    /* if (this.length === 0) {
      return 'underfined';
    }

    this.lastElementIndex--;
    return 1;

    /*
    if (this.head === null) {
      return 'underfined'; */
  }
  /*
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  } */

  peek() {
    throw new Error('Not implemented');
    //    return this.head.value;
    // return this.array[this.lastElementIndex];
    // return 1;
  }
}
// const Stack= new Stack();

module.exports = Stack;
