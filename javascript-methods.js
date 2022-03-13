// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
  };
  
  // MAP //
  Array.prototype.myMap = function() {
    // Place your code here.
  };
  
  // SOME //
  Array.prototype.mySome = function() {
    // Place your code here.
  };
  
  // REDUCE //
  Array.prototype.myReduce = function() {
    // Place your code here.
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function() {
    // Place your code here.
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function() {
    // Place your code here.
  };
  
  // PUSH //
  Array.prototype.myPush = function() {
    // Place your code here.
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function() {
    // Place your code here.
  };
  
  // KEYS //
  Object.myKeys = function() {
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function() {
    // Place your code here.
  };