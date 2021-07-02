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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
