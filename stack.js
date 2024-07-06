class Stack {
    constructor() {
        this.stack = [];
    }

    push(el) {
        this.stack.push(el);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }

    contain(el) {
        return this.stack.includes(el);
    }

    reverse() {
        this.stack.reverse();
    }

    printStack() {
        return this.stack.join(',');
    }
 }

 let myStack = new Stack();

 myStack.push(1);
 myStack.push(2);
 myStack.push(3);
 myStack.push(4);
 myStack.push(5);
 myStack.push(6);

 myStack.pop();
 
 console.log(myStack.peek());

 console.log(myStack.contain(2));

 myStack.reverse();

 console.log(myStack.printStack());