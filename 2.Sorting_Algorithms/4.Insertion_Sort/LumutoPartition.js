/*
In this exercise, we will see quicksort can be implemented using Lumuto partitions. The 
Lumuto partition is a method of splitting an array such that we start by picking the last 
element in the array. We then sort that element in its rightful place, and remove it from 
subsequent recursive calls. The goal of the Lumuto partition is to reduce the number of 
sorts required by sorting the partition element. The code to partition the array is shown below.
*/

function partition(arr, start, end) {
  var pivot = arr[end];
  var pIndex = start;

  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      var temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;

      pIndex++;
    }
  }

  var temp = arr[end];
  arr[end] = arr[pIndex];
  arr[pIndex] = temp;

  return pIndex;
}

/* Once this code is in place, you can use it in the quicksort algorithm as usual. */

function quicksort(arr, start, end) {
  if (start >= end) {
    return;
  }
  var pivot = partition(arr, start, end);
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot + 1, end);
}
