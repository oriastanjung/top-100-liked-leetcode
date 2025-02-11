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

  // Menangani node pertama sebelum loop
  if (l1) firstDepth.push({ val: l1.val, depth: 1 });
  if (l2) secondDepth.push({ val: l2.val, depth: 1 });

  while (l1?.next) {
    l1 = l1.next;
    firstDepth.push({
      val: l1.val,
      depth: firstDepth[firstDepth.length - 1].depth * 10,
    });
  }

  while (l2?.next) {
    l2 = l2.next;
    secondDepth.push({
      val: l2.val,
      depth: secondDepth[secondDepth.length - 1].depth * 10,
    });
  }

  let firstTotal = firstDepth.reduce(
    (sum, item) => sum + item.val * item.depth,
    0
  );
  let secondTotal = secondDepth.reduce(
    (sum, item) => sum + item.val * item.depth,
    0
  );

  let total = firstTotal + secondTotal;
  let totalStr = total.toString();
  let totalArr = totalStr.split("").map((item) => Number(item));

  let result: ListNode | null = null;
  for (let i = 0; i < totalArr.length; i++) {
    result = new ListNode(totalArr[i], result);
  }

  return result;
}

// case 1
// const input = new ListNode(2, new ListNode(4, new ListNode(3)));
// const input2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// case 2
const input = new ListNode(0);
const input2 = new ListNode(1);

console.log(addTwoNumbers(input, input2));
