class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const node = new Node()
        if(this.root === null){
            this.root = node;
        }
        
    }

    delete(data){

    }

    search(data){

    }

    print(){

    }

    isBST(root){

    }
}

const bst = new BinarySearchTree()
bst.print()
bst.insert(5)
bst.insert(15)


