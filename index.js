const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
          callback();
        }
      } else {
        for(const [key, value] of Object.entries(collection)) {
          callback(value);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = [];
      if(Array.isArray(collection)) {
        for(let i = 1; i < (collection.length + 1); i++){
          newArr.push(callback(i));
        } 
      } else {
        for(const [key, value] of Object.entries(collection)) {
          newArr.push(callback(value));
        }
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let num = 0
      for(let i = 0; i < collection.length; i++){
        num = callback(num, collection[i])
      }
      if(acc !== undefined) {
        num += acc
      } else {
        num -= 2
      }
      return num
    },

    find: function(collection, callback) {
      for(let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, callback) {
      const array = [];
      for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])){
          array.push(collection[i]);
        }
      }
      return array;
    }, 

    size: function(collection) {
      let size = 0;
      if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
          size += 1;
        }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          size += 1;
        }
      }
      return size;
    },

    first: function(collection, n) {
      if(n !== undefined) {
        let array = [];
        for(let i = 0; i < n; i++) {
          array.push(collection[i]);
        }
        return array;
      } else {
        return collection[0]
      }
    }, 

    last: function(collection, n) {
      if(n !== undefined) {
        let array = [];
        for(let i = (n - 2); i < collection.length; i++) {
          array.push(collection[i]);
        }
        return array;
      } else {
        return collection[collection.length -1]
      }
    }, 

    compact: function(collection) {
      let array = [];
      for (let i = 0; i < collection.length; i++) {
        if(collection[i] !== 0) {
          if(collection[i] !== "") {
            if(collection[i] !== null) {
              if (!Object.is(collection[i], NaN)) {
                if (collection[i] !== false) {
                  if (collection[i] !== undefined) {
                    array.push(collection[i])
                  }
                }
              }
            }
          }
        }
      }
      return array;
    }, 

    sortBy: function(array, callback) {
      let myArray = []
      array.forEach(item => { myArray.push(item)})
      return myArray.sort(function(a, b){return callback(a)- callback(b)});
    }, 

    flatten: function(nestedArr, layerDeep) {
      let myArray = []
      if(layerDeep === true) {
        myArray = nestedArr.flat(1)
      } else {
        myArray = nestedArr.flat(Infinity)
      }
      return myArray
    }, 

    uniq: function(array, isSorted,) {
      const myArray = [];
      let check;

      if (isSorted !== undefined) {
        const sorted = array.sort(function(a, b){return a - b});
        sorted.forEach(item => {
          if (item !== check) {
            myArray.push(item)
          }
          check = item
        });
      }
      
      return myArray
    }, 

    keys: function(object) {
      const myArray = [];
      for (const [key, value] of Object.entries(object)) {
        myArray.push(key)
      }
      return myArray
    }, 

    values: function(object) {
      const myArray = [];
      for (const [key, value] of Object.entries(object)) {
        myArray.push(value)
      }
      return myArray
    }, 

    functions: function(object) {
      const myArray = [];
      for (const [key, value] of Object.entries(object)) {
        if(typeof value === 'function') {
          myArray.push(key)
        }
      }
      return myArray.sort(function(a, b){return a - b});
    }
  }
})()

fi.libraryMethod()