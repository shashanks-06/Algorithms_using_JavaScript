// 1
/*
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4, 8, 2, 0, 9, 5, 1, 7, 3, 6]));
*/

// 2

/*
In this exercise, we will see how we can sort an array that contains only 0, 1 and 2 as
values. This process involves splitting our array into 3 parts. The first part contains all
the 0s, the second part contains all the 1s, and the last part contains all the 2s. We then 
iterate from the middle, placing 0s and 2s where they belong. The result will be that all 
values are where they should be. The code for this is shown below.
*/

var arr = [0, 2, 1, 2, 1, 0, 0, 0, 2, 1, 0, 2, 1];

let low = 0;
let high = arr.length - 1;
let mid = 0;
let temp = 0;

while (mid <= high) {
  if (arr[mid] == 0) {
    temp = arr[low];
    arr[low] = arr[mid];
    arr[mid] = temp;

    low++;
    mid++;
  } else if (arr[mid] == 1) {
    mid++;
  } else {
    temp = arr[mid];
    arr[mid] = arr[high];
    arr[high] = temp;

    high--;
  }
}

console.log(arr);
