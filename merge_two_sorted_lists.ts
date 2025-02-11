/**
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const arr: number[] = [];
  if (typeof(list1?.val) === "number") {
    arr.push(list1.val);
  }
  while (list1?.next) {
    list1 = list1.next;
    arr.push(list1.val);
  }

  if (typeof(list2?.val) === "number") {
    arr.push(list2.val);
  }
  while (list2?.next) {
    list2 = list2.next;
    arr.push(list2.val);
  }
  arr.sort((a, b) => a - b);
  let result: ListNode | null = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
}

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const l1 = null
const l2 = new ListNode(0);
const result = mergeTwoLists(l1, l2);
console.log(result);
