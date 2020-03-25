/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    var firstIndex  = 0,
        lastIndex   = array.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(array[middleIndex] != target && firstIndex < lastIndex)
    {
       if (target < array[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (target > array[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

      if (array[middleIndex] != target) {
         return null
     }
      else{ return middleIndex;}

};
