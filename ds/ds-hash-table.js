class HashTable {
    constructor(size = 20) {
      this.bucket = Array(size).fill(null);
      this.keys = {};
    }
  
    //return hash number for given string, sum of charcode and its position
    _hash(key) {
      const hash = Array.from(key).reduce(
        (result, char, index) => result + char.charCodeAt(0)+index,
        0
      );
      return hash % this.bucket.length;
    }
  
    set(key, value) {
      const keyHash = this._hash(key);
      this.keys[key] = keyHash;
      this.bucket[keyHash] = value;
    }
  
    get(key) {
      return this.bucket[this._hash(key)];
    }
  
    delete(key) {
      this.bucket[this._hash(key)] = null;
      delete this.keys[key];
    }
  
    has(key) {
      return this.keys.hasOwnProperty(key);
    }
  
    print() {
      const msg = this.bucket.reduce(
        (result, data, index) => result + index + "->" + data+', ',
        ""
      );
      console.log("print: ", msg);
    }
  }
  
  const ht  = new HashTable()
  
  let r ;
  
  ht.set('vikash', {name: 'vikash'})
  ht.set('koushik', 'koushik')
  ht.set('keffy', 'Keffy bansal')
  ht.print()
  
  r = ht.get('vikash')
  console.log('get vikash:', r)
  r = ht.get('keffy')
  console.log('get keffy:', r)
  
  r = ht.has('keffy')
  console.log('has keffy:', r)
  r = ht.has('keffy1')
  console.log('has keffy1:', r)
  