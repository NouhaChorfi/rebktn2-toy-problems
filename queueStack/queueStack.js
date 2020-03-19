/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var mySTack={}
  mySTack.storage = [];

  mySTack.push = function(value) {
    this.storage.push(value)
  };

  mySTack.pop = function() {
    return this.storage.pop()

  };

  mySTack.size = function() {
    return this.storage.length
  };

  return mySTack
};

var Queue = function() {
  var myQueue={}
  myQueue.inbox = new Stack();
  myQueue.outbox = new Stack();

  myQueue.enqueue = function(value) {
    this.inbox.push(value)
      this.outbox.storage.unshift(value)
  };

  myQueue.dequeue = function() {
    return this.outbox.pop()
  };

  myQueue.size = function() {
    return this.outbox.size()
  };
  return myQueue
};

var stack= Stack()
var queue= Queue()
