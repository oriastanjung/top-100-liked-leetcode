class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/*
Case 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

case 2:
Input: l1 = [0], l2 = [0]
Output: [0]

case 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

type Item = {
  val: number;
  depth: number;
};
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode | null = null;
  let carry = 0;
  let iterator_result;

  while (l1 !== null || l2 !== null) {
    let temp1 = l1?.val ? l1?.val : 0;
    let temp2 = l2?.val ? l2?.val : 0;
    let sum = temp1 + temp2 + carry;
    carry = Math.floor(Number(sum / 10));
    if (result == null) {
      result = new ListNode(sum % 10, null);
      iterator_result = result;
    }
    else if (iterator_result.next == null) {
      iterator_result.next = new ListNode(sum % 10, null);
      iterator_result = iterator_result.next
    }
    
    l1 = l1?.next ? l1?.next : null;
    l2 = l2?.next ? l2?.next : null;
  }
  if (carry != 0) {
    iterator_result.next = new ListNode(carry, null);
  }

  return result;
}

// case 1
// const input = new ListNode(2, new ListNode(4, new ListNode(3)));
// const input2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// const input = new ListNode(0);
// const input2 = new ListNode(0,new ListNode(1));

// case 2
let current
let input = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].map((item) =>{
  current = new ListNode(item, current);
  return current
});
// const input = new ListNode(0);
const input2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(current, input2));
// console.log(addTwoNumbers(input, input2));
