/*

In this exercise, we will see how we can efficiently remove duplicate values from an array 
in place when it is in sorted order. This algorithm is one of many use cases for sorting in 
programming. The main idea is that if an array is sorted, duplicates will appear next to 
eachother. We use this to remove all duplicate values, iterating to check the value next to 
the current value to see if a duplicate exists.

Our algorithm will be designed to output the number of unique elements in the array. The code for this is shown below.
*/

nums = [1, 1, 2, 3, 3, 4, 5, 6, 5, 5, 5];
nums.sort();

if (nums.length === 0) {
  console.log("Array is Empty!");
} else {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(i + 1);
}

/*
In this example, the output is 6, since there are 6 unique values in the array.
*/
