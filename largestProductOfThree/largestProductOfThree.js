/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product 
possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var max = 0
    if(array.length>=3){
        for(var i=0; i< array.length; i++){
            for (var j=1 ; j< array.length ; j++){
                for (var k= 2 ; k< array.length ; k++){
                    var product = array[i] * array[j] * array[k]
                    if(max < product){
                        max=product
                    }
                }
            }
        }
        return max        
    }
}
