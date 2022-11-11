class QueWithStacks {
  constructor() {
    // stack that we push values into
    this.in = []
    // stack that we use to pop
    this.out = []
  }

  enqueue(val){
    // adds a value into the in stack.
    this.in.push(val);
  }

  dequeue(){
    // removes a value from the out stack.
    if (this.out.length === 0){
      while(this.in.length){
        this.out.push(this.in.pop())
      }
    }
    return this.out.pop();
  }

  peek(){
    // returns the top most element of a stack without popping
    if (this.out.length === 0){
      while(this.in.length){
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty(){
    // checks for an empty stack.
    return this.in.length === 0 && this.out.length === 0;
  }
}
