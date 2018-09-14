class Sorter {
  
  constructor() {
    // your implementation
     this.arr = new Array();//[];
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    arr[index];
  }

  get length() {
    // your implementation
    return  arr.length;
  }

  toArray() {
    // your implementation
    arr;
  }
//takes indices of already added elements and sorts *only* these elements
  sort(indices) {
    // your implementation
    
    var n = indices.length;
    for (var i = 0; i < n-1; i++)
     { 
       var min = indices[i];
       for (var j = i+1; j < n; j++)
        {
           if (arr[indices[j]] < arr[min]) min = indices[j]; 
          } 
       var t = arr[min]; arr[min] = arr[indices[ i]]; arr[indices[ i] ] = t;
     }        

    //     for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    //     for (var j = 0, endJ = endI - i; j < endJ; j++) {

    //         if (arr[j] > arr[j + 1]) {
    //             var swap = arr[j];

    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = swap;
    //         }
    //     }
    // }
    

  }

  setComparator(compareFunction) {
    // your implementation
    
   arr.sort(compareFunction);
  }
}

module.exports = Sorter;