/*
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 


*/


function lengthOfLastWord(s: string): number {
    const arr = s.split(" ")
    const filteredArr = arr.filter((item) => item !== "")
    return filteredArr[filteredArr.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))