function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 4, 2, 7, 5, 8]));
