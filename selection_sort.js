// Selection sort
// by Tendai Mutunhire


// swap any arbitrary two elements in an array, by index
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};


// find the minimum element in a subarray of an array, starting at given startIndex
// returns the index of the minimum element in the subarray
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 


// sorts an array, tilizing the previously defined helper functions
var selectionSort = function(array) {
    var indexMin = indexOfMinimum(array, 0);
    var min = array[indexMin];
    swap(array, indexMin, 0);
    for (var x = 1; x < array.length; x++) {
     var indexSmallest = indexOfMinimum(array, x);
     if (indexSmallest !== x) {
         swap(array, indexSmallest, x);
     }
    }
    
};

function println(contents) {
    console.log(contents);
}

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

module.exports = {
    selectionSort: selectionSort
}
