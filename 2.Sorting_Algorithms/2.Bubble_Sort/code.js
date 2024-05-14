// 1

/*
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 2, 3, 1, 5, 6, 8, 7]));
*/

// 2

function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let arr1Done = index1 >= arr1.length;
    let arr2Done = index2 >= arr2.length;

    if (!arr1Done && (arr2Done || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
}

var arr1 = [3, 5, 6, 10, 11, 20];
var arr2 = [1, 2, 7, 8, 15, 19];

console.log(mergeTwo(arr1, arr2));
