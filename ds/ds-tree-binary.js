class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  
    addToLeft(node) {
      this.left = node;
    }
  
    addToRight(node) {
      this.right = node;
    }
  }
  
  class BinaryTree {
    constructor(data) {
      this.root = new Node(data);
    }
  
    getNode(data) {
      let targetNode = null;
      function search(node) {
        if (node === null) {
          return;
        }
        if (node.data === data) {
          targetNode = node;
          return;
        }
        search(node.left);
        search(node.right);
      }
      search(this.root);
      return targetNode;
    }
  
    addToLeft(currData, newData) {
      const currNode = this.getNode(currData);
      console.log(currNode, currData, newData);
      const newNode = new Node(newData);
      currNode.left = newNode;
    }
  
    addToRight(currData, newData) {
      const currNode = this.getNode(currData);
      const newNode = new Node(newData);
      currNode.right = newNode;
    }
  
    printDFS() {
      console.log("\nPRINT DFS");
      console.log(".........");
      function print(node) {
        if (node === null) {
          return;
        }
        console.log(node.data);
        print(node.left);
        print(node.right);
      }
      print(this.root);
    }
  
    printBFS() {
      console.log("\nPRINT BFS");
      console.log(".........");
      if (this.root === null) {
        return;
      }
      const que = [];
      que[0] = this.root;
      while (true) {
        if (que.length === 0) {
          return;
        }
        const node = que.pop();
        console.log(node.data);
        if (node.left) {
          que.unshift(node.left);
        }
        if (node.right) {
          que.unshift(node.right);
        }
      }
    }
  }
  
  const binaryTree = new BinaryTree(1);
  binaryTree.addToLeft(1, 2);
  binaryTree.addToRight(1, 3);
  binaryTree.addToLeft(2, 4);
  binaryTree.addToRight(2, 5);
  binaryTree.addToLeft(3, 6);
  binaryTree.addToRight(3, 7);
  
  binaryTree.printDFS();
  binaryTree.printBFS();
  