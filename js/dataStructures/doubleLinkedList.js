class DoubleLinkedList{
    constructor() {
        this.tail = null;
        this.head = null;
    }
    append(value) {
        const newNode = {value:value, next:null, prev:null};
        if(this.tail) {
            this.tail.next=newNode;
            newNode.prev = this.tail;
        }
        this.tail= newNode;
        if(!this.head) {
            this.head = newNode
        }
    }
    prepend(value) {
        const newNode = {value:value, next:this.head, prev:null};
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
    }
    toArray() {
        const arr= []
        let currNode = this.head;
        while(currNode){
            arr.push(currNode)
            currNode = currNode.next;
        }
        console.log(arr)
        return arr;
    }
    delete(value) {
        while(this.head && this.head.value === value){
            this.head= this.head.next;
            console.log(this.head)
        }
        // console.log(this.head.value)
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

const list = new DoubleLinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toArray());