function mergeSort(arr) {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  } else {
    let left = arr.splice(0, half);

    return merge(mergeSort(left), mergeSort(arr));
  }
}


