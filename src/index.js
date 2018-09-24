class Sorter {
  constructor() {
   this.array = [];
   this.firstCactom = (left, right) => right - left;
   this.compareFunction = this.firstCactom;
  }

  add(element) {
     this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var map =  [];
    indices.sort(this.firstCactom);
    for  (var i = 0; i < indices.length; i++) {
      if (indices[i] >= 0 && indices[i] < this.array.length) {
        map.push(this.array[indices[i]]);
      } else {}
    }

      var mapSize = map.length;
      map.sort(this.compareFunction);
      for (var i = 0; i < mapSize; i++) {
        this.array[indices[i]] = map.shift();
      }

    }
  

  setComparator(compareFunction) {
    if (compareFunction != null) {
      this.compareFunction = compareFunction;
    }     else {
      this.compareFunction = this.firstCactom;
    }
  };
};

module.exports = Sorter;