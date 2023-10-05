function hasTargetSum(array, target) {
  //Write your algorithm here

    for (let i = 0; i < array.length; i++) {
       let otherNumber = target - array[i];
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] === otherNumber) {
            return true;
          }
        }
      }
  
    return false;
  }

/* 
  Write the Big O time complexity of your function here

  This is a quadratic time function 
  runtime : O(n^2)
*/

/* 
  Add your pseudocode here
  iterate through every number in the array 
  find the other number
  other number = target - array[i]
  assign j to be at index[i + 1]
  if othernumber === array[j], return true.
  if not, add that number to the object and if I reach the end of the array without
  getting the number, return false.
*/

/*
  Add written explanation of your solution here
  iterate through every number in the array 
  for the current number at index[i], find the other number in the array 
  by subtracting it with the target number
  other number = target - array[i]
  then find if the other number matches any number in our array
  i.e assign j to be at index[i + 1].  if it does, return true.
  otherwise, add that number to the object and if I reach the end of the array without
  getting the number, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
