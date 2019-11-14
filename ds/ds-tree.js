class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    appendChild(node) {
      this.children.push(node);
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    addRoot(node) {
      this.root = node;
    }
  
    printBFS() {
      console.log("\nPRINT BFS");
      console.log(".........");
      const que = [];
      que[0] = this.root;
      while (true) {
        if (que.length === 0) {
          break;
        }
        const node = que.pop();
        console.log(node.data);
        for (let i = 0; i < node.children.length; i++) {
          que.unshift(node.children[i]);
        }
      }
    }
  
    printDFS() {
      function print(node) {
        console.log(node.data);
        if (node.children.length === 0) {
          return;
        }
        for (let i = 0; i < node.children.length; i++) {
          print(node.children[i]);
        }
      }
      console.log("\nPRINT DFS");
      console.log("...........");
      print(this.root);
    }
  }
  
  const p1 = new Node("p1");
  const p2 = new Node("p2");
  const div1 = new Node("div1");
  div1.appendChild(p1);
  div1.appendChild(p2);
  
  const div2 = new Node("div2");
  const div3 = new Node("div3");
  const body = new Node("body");
  body.appendChild(div1);
  body.appendChild(div2);
  body.appendChild(div3);
  
  const root = new Node("root");
  root.appendChild(body);
  
  const domTree = new Tree();
  domTree.addRoot(root);
  
  console.log(domTree);
  domTree.printDFS();
  domTree.printBFS();
  