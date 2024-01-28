export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const removeElementsFromLinkedList1 = (
  head: ListNode | null,
  val: number
) => {
  if (!head) return null;
  if (head.val === val) return removeElementsFromLinkedList1(head.next, val);
  head.next = removeElementsFromLinkedList1(head.next, val);
  return head;
};

export const removeElementsFromLinkedList2 = (
  head: ListNode | null,
  val: number
) => {
  const newLinkedList = new ListNode(-Infinity, head);

  let current = newLinkedList;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return newLinkedList.next;
};
