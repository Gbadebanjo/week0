// Create a function that takes an array of numbers and returns the second largest number.
 //secondLargest([10, 40, 30, 20, 50]) ➞ 40
 // secondLargest([25, 143, 89, 13, 105]) ➞ 105
 // secondLargest([54, 23, 11, 17, 10]) ➞ 23

 

// Solution 1
function arrayofnumbers(arr) {
    arr.sort((a,b) => a - b);
    return arr[arr.length-2]; 
}
secondlargest = [10, 40, 30, 20, 50];
thirdlargest = [25, 143, 89, 13, 105];
 
console.log(arrayofnumbers(secondlargest));



