
function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order.

  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize the closest sum.

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // Update closestSum if the current sum is closer to the target.
      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
