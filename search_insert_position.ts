/*

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 
*/

function searchInsert(nums: number[], target: number): number {
  const result = nums.indexOf(target);
  if (result == -1) {
    nums.push(target)
    nums.sort((a, b) => a - b)
    
    return nums.indexOf(target)
  }
  return result;
}

console.log(searchInsert([1, 3, 5, 6], 7));
