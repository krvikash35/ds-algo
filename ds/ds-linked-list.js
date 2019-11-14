class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null;
    }
  
    print(){
        let current = this.head
        let result = ''
        while(current !== null){
            result = result + '->'+ current.data
            current=current.next
        }
        console.log(result)
    }
  
    prepend(data){
      const node = new Node(data)
      if(this.head===null){
        return this.head = null
      }
      node.next = this.head
      this.head = node
    }
  
    append(data){
      const node = new Node(data)
      if(this.head===null){
        return this.head = node
      }
      let current = this.head
      while(current.next!==null){
        current = current.next
      }
      current.next = node
    }
  
    delete(data){
      if(this.head === null){
        return
      }
      if(this.head.data === data){
        this.head = this.head.next
      }
      let current = this.head
      let prev = null;
      while(current.next !==null && current.data !== data){
        prev = current;
        current = current.next
      }
      prev.next = prev.next.next
    }
  }
  
  const ll = new LinkedList()
  
  ll.append(2)
  ll.append(12)
  ll.append(1)
  ll.print()
  
  ll.prepend(15)
  ll.print()
  
  ll.delete(2)
  ll.print()
  ll.delete(1)
  ll.print()