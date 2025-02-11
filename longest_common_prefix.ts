/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.


*/

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  const sortedStrs = strs.sort();
  const first = sortedStrs[0];
  const last = sortedStrs[sortedStrs.length - 1];
  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    }else{
        break
    }
  }

  return result
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
