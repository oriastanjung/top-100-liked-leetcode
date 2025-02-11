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
  let firstDepth: Item[] = [];
  let secondDepth: Item[] = [];
  
  while (l1?.next) {
    if (firstDepth.length === 0)
      firstDepth.push({ val: l1?.val ? l1?.val : 0, depth: 1 });
    else {
      firstDepth.push({
        val: l1?.val ? l1?.val : 0,
        depth: firstDepth[firstDepth.length - 1].depth * 10,
      });
    }

    l1 = l1?.next ? l1.next : null;
    if (l1?.next === null) {
      firstDepth.push({
        val: l1?.val ? l1?.val : 0,
        depth: firstDepth[firstDepth.length - 1].depth * 10,
      });
      break;
    }
  }
  let firstTotal = 0;
  for (let i = 0; i < firstDepth.length; i++) {
    firstTotal += firstDepth[i].val * firstDepth[i].depth;
  }

  while (l2?.next) {
    if (secondDepth.length === 0)
      secondDepth.push({ val: l2?.val ? l2?.val : 0, depth: 1 });
    else {
      secondDepth.push({
        val: l2?.val ? l2?.val : 0,
        depth: secondDepth[secondDepth.length - 1].depth * 10,
      });
    }

    l2 = l2?.next ? l2.next : null;
    if (l2?.next === null) {
      secondDepth.push({
        val: l2?.val ? l2?.val : 0,
        depth: secondDepth[secondDepth.length - 1].depth * 10,
      });
      break;
    }
  }
  let secondTotal = 0;
  for (let i = 0; i < secondDepth.length; i++) {
    secondTotal += secondDepth[i].val * secondDepth[i].depth;
  }
  
  let total = firstTotal + secondTotal;
  let totalStr = total.toString();
  let totalArr = totalStr.split("").map((item) => Number(item));
  let result
  for (let i = 0; i < totalArr.length; i++) {
    result = new ListNode(totalArr[i], result);
  }

  return result;
}

// case 1
const input = new ListNode(2, new ListNode(4, new ListNode(3)));
const input2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// case 2
// const input = new ListNode(0);
// const input2 = new ListNode(0);

console.log(addTwoNumbers(input, input2))
