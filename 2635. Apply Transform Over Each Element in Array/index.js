/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var mapMethodOne = function(arr, fn) {
    // i will create a new array
    array = new Array(arr.length);
    // i will take a for loop
    for(let i = 0;  i < arr.length; ++i){
        array[i] = fn(arr[i], i)
    }
    // return the result with the new array 

    return array;   
};

fn = function plusone(n) { return n + 1; }

console.log(mapMethodOne([1,2,3],fn));

var mapMethodTwo = function(arr, fn) {
    // i will create a new array
    array = new Int32Array(arr.length);
    // i will take a for loop
    for(let i = 0;  i < arr.length; ++i){
        array[i] = fn(arr[i], i)
    }
    // return the result with the new array 

    return array;
}

/*
The time complexity of this version of the map function is also O(n), where n is the length of the input array arr.

Explanation:
Array Initialization: Initializing a new array (newArr = new Int32Array(arr.length)) takes O(n) time to allocate memory for n elements.
Loop Operation: The for loop iterates over each element in arr, calling fn(arr[i], i) and storing the result in newArr[i]. 
This loop runs n times, and assuming fn operates in O(1), this part of the code has a time complexity of O(n).
Overall Complexity
The time complexity of initializing the Int32Array is O(n).
The time complexity of the for loop is O(n).
Since both operations are O(n), the overall time complexity remains O(n).

If fn has a complexity other than O(1), then the complexity would adjust to O(n * f), where f is the time complexity of fn.
*/
fn = function plusone(n) { return n + 1; }

console.log(mapMethodTwo([1,2,3],fn));

Array.prototype.myMap = function (fn){
    array = new Array(this.length);

    for(let i = 0; i < this.length; ++i){
        array[i] = fn(this[i], i)
    }
    return array;
}


console.log([1,2,3].myMap(fn));


