/*
In this exercise, we will write a method to reverse a string without the need for
additional storage space in the way of a stack. The process of this is to use recursion to 
iterate the string in a reverse manner. The code for this is short and simple. 
*/

function reverse(str, len) {
  if (len == str.length) {
    return;
  }

  reverse(str, len + 1);
  console.log(str[len]);
}

var s = "test string";
reverse(s, 0);

/*
On each iteration, we print the next letter, using the call stack of recursion to simulate 
an actual stack. This allows us to reverse the string without our own stack implementation.
*/
