class Queue{

    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()) return 'Empty';
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty()) return 'Empty';
        return this.items[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printQueue(){
        for(let i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

module.exports = Queue;