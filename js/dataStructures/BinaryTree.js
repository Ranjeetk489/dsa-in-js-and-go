class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    insert (value) {
        const newNode = new Node(value);
        if(!this.root){
            this.root= new Node(value)
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode (root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            this.postOrder(root.value);
        }
    }

    search(root, value) {
        if(!root) {
            return false
        }
        
        if(root.value === value){
            console.log(root)
            return root
        }
        if(value < root.value) {
            this.search(root.left, value)
        }
        else {
            this.search(root.right, value)
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left ) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }
    min(root){
        if(root.left === null) {
            console.log(root.value)
            return root.value
        }
        this.min(root.left)
    }
    max(root){
        if(root.right === null) {
            console.log(root.value)
            return root.value
        }
        this.max(root.right)
    }

    delete(value) {
        this.root = this.deleteNode(this.root ,value)
    }

    deleteNode(root,value) {
        if(root == null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)

        } else if (value > root.value)  {
            root.right = this.deleteNode(root.left, value)
        }
        else {
            if(!(root.left && root.right)){
                return null
            }
            if(!root.left) {
                return root.right;
            }
            else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right =this.deleteNode(root.right, root.value)
        }
            return root;
        }
    }
}

let bst = new BinaryTree;
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.max(bst.root)