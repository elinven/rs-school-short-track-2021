const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
/* class ListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
} */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    // throw new Error('Not implemented');
    return this.length;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    const node = new ListNode(element);
    if (this.head) {
      this.tail.next = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    // throw new Error('Not implemented');
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  }
}

module.exports = Queue;
