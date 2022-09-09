//* Implement a linked list

class LinkedList {
    constructor() {
        this.head= null;
        this.tail= null;
    }
    append(value) {
        const newNode = {value:value, next:null};
        if(this.tail) {
            this.tail.next=newNode;
        }
        this.tail= newNode;

        if(!this.head) {
            this.head = newNode
        }
    }

    toArray() {
        const arr= []
        let currNode = this.head;
        while(currNode){
            arr.push(currNode)
            currNode = currNode.next;
        }
        return arr;
    }
    prepend(value) {
        const newNode = {value:value, next:this.head};
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
    }
    delete(value) {
        while(this.head && this.head.value === value){
            this.head= this.head.next;
            return;
        }
        let currNode = this.head;
        while(currNode.next) {
            if(currNode.next.value == value) {
                currNode.next = currNode.next.next;
            }
            else {
                currNode = currNode.next
            }
        }
    }
}
