// In this exercise, we will see how to determine the missing number from a list of all the numbers from 1 to 100. There are two different approaches to this problem, with one being signficantly more efficient than the other. The first method would be to compare all the numbers in the array to a set of the numbers from 1 to 100, tracking which have been seen. Once this is done, we check which number has not been seen, and set it is the missing number. This method requires extra storage for the numbers from 1 to 100, and requires more work on average to complete.

// The more effective method is to take advantage of the fact that the sum of the numbers from 1 to 100 is 5050. Knowing this, if we sum our list, then subtract from 5050, it gives us the missing number. The code for this is shown below.

nums = [];

for (var i = 1; i <= 100; i++) {
  if (i != 50) {
    nums[i - 1] = i;
  } else {
    nums[i - 1] = 0;
  }
}

var total = 0;

for (var i = 0; i < nums.length; i++) {
  total += nums[i];
}
    
console.log("Missing no. is ", 5050 - total);

//The first part of the code generates the numbers from 1 to 100, with 50 excluded. The second loop sums the values and finds the missing number.
