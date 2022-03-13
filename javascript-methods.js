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
  Array.prototype.myMap = function(callback) {
    const result = [];  // declaring array type const to store result
    for (i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
      value = this[i];  // saving value of each location (index) after iterations
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
      result[i] = callback(value, index, array);  // constructing new array with each element being the result of the callback function
    }
    return result; // result is "console.log(element,index,array)"
  };

  
  // SOME //
  Array.prototype.mySome = function(callback) {

    for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.
      const value = this[i]; // declaring array type const and saving value of each location (index) after iterations
      // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
      if (callback(value, i, this)) {  // if values match print true
        return true;
      }
    }
    return false; // if values does not match print false
  };
  

  // REDUCE //
  Array.prototype.myReduce = function(callback, initialValue) {
    if (initialValue === undefined) {
      acc = this[0]; // if initial value not assigned take index 0 as initial
      startAtIndex = 1; //Iteration starts here index 1
    }
    else
    {
     acc = initialValue; // if initial value assigned 
     startAtIndex = 0; // Iteration starts here index 0
    }
    for (i = startAtIndex; i < this.length; i++) { // "this" keyword refers to the array being called
      value = this[i];
        // callbackFn can take 4 input parameters:
        // previousValue
        // previousValue, currentValue
        // previousValue, currentValue, currentIndex, array (this)
      acc = callback(acc, value, i, this); //Saving single value as result in acc
    }
    return acc;  //result is "console.log(acc)"
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
  Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
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