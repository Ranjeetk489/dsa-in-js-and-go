class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value){
        const newNode = {value: value, next:null}
        if(this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if(!this.head) this.head = newNode;
    }

    toArray(){
        const arr = [];
        let currNode = this.head;
        while(currNode){
            arr.push(currNode);
            currNode = currNode.next
        }
        console.log(arr)
        return arr;
    }
    prepend(value) {
        const newNode = {value:value, next:null};
        [this.head, this.head.next] = [newNode, this.head];
        if(!this.tail) this.tail = newNode;
    }
    delete(value) {
        while(this.head && this.head.value === value){
            this.head= this.head.next;
            console.log(this.head)
        }
        let currNode = this.head;
        while(currNode) {
            if(currNode.next.value === value) {
                currNode.next = currNode.next.next;
                return
            }
            currNode = currNode.next;
        }
    }
}

const ll = new LinkedList();
ll.addNode(4)
ll.addNode(6)
ll.prepend(1)
ll.delete(4)
ll.toArray()