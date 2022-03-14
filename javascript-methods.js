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
  Array.prototype.myIncludes = function(searchElement, startIndex = 0) {
        // can take up to 2 input parameters:
        // searchElement
        // searchElement, fromIndex
    if (startIndex < 0)
    {
        startIndex = this.length + startIndex;
    }
    if(startIndex >= this.length || startIndex < 0)
    {
        return false;
    }
    for(i = startIndex; i < this.length; i++) // "this" keyword refers to the array being called
    {
        if(this[i] === searchElement) //comparing values from array and input parameter
        {
            return true; //if values match return true
        }
    }
    return false; //if values do not match return false 
  };
  

  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement, startIndex = 0) {
        // can take up to 2 input parameters:
        // searchElement
        // searchElement, fromIndex
    if (startIndex < 0) //if out of lower bound
    {
        startIndex = this.length + startIndex;
    }
    if(startIndex > this.length || startIndex < 0) //if out of lower and upper bounds
    {
        return -1; //if value is not found in array print -1
    }
    for(i = startIndex; i < this.length; i++) // "this" keyword refers to the array being called
    {
        if(this[i] === searchElement) //comparing parameters and actual values
        {
            return i; //if found print -1 
        }
    }
    return -1; //if not found 1
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
  Array.prototype.myLastIndexOf = function(searchElement, startIndex = this.length-1) {
        // can take up to 2 input parameters:
        // searchElement
        // searchElement, fromIndex
    if (startIndex < 0) //if out of lower bound
    {
        startIndex = this.length + startIndex;
    }
    if(startIndex < 0) //if out of lower bound
    {
        return -1; //if out of lower bound/not present print -1
    }
    else if(startIndex > this.length)
    {
        startIndex = this.length;
    }
    for(i = startIndex; i >= 0; i--) // "this" keyword refers to the array being called
    {
        if(this[i] === searchElement) //comparing parameters and actual values indexes
        {
            return i; //if found print last index of
        }
    }
    return -1; //if not found print -1
  };
  

  // KEYS //
  Object.myKeys = function() {
    // Place your code here.
  };
  

  // VALUES //
  Object.myValues = function() {
    // Place your code here.
  };