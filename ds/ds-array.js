class Arr {
  constructor(size) {
    this.data = Array(size);
  }

  insert(data) {
    let i = 0;
    while (i < this.data.length) {
      if (this.data[i] === undefined) {
        this.data[i] = data;
        return console.log(`Inserted ${data} at ${i}`);
      }
      i++;
    }
    return console.log(`No position to insert ${data}`);
  }

  delete(data) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === data) {
        console.log(`Deleted ${data} from position ${i}`);
        return (this.data[i] = undefined);
      }
    }
    console.log("No data found to delete");
  }

  search(data) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === data) {
        return console.log(`Found ${data} at Position:${i}`);
      }
    }
    return console.log(`Could not found ${data}`);
  }

  print() {
    let result = "";
    for (let data of this.data) {
      result = result + "->" + data;
    }
    console.log(result);
  }
}

const arr1 = new Arr(4);
arr1.insert(4);
arr1.insert(13);
arr1.insert(25);
arr1.insert(15);
arr1.insert(105);
arr1.print();
arr1.search(13);
arr1.search(23);
arr1.delete(12);
arr1.delete(13);
arr1.print();
