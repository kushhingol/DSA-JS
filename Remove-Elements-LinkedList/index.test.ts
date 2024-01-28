import {
  ListNode,
  removeElementsFromLinkedList1,
  removeElementsFromLinkedList2,
} from ".";

describe("Test Remove Elements From Linked List", () => {
  test.each`
    list                              | val  | expected
    ${[]}                             | ${1} | ${[]}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 6, 9]} | ${6} | ${[1, 2, 3, 4, 5, 7, 8, 9]}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 6, 9]} | ${1} | ${[2, 3, 4, 5, 6, 7, 8, 6, 9]}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 6, 9]} | ${9} | ${[1, 2, 3, 4, 5, 6, 7, 8, 6]}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 6, 9]} | ${0} | ${[1, 2, 3, 4, 5, 6, 7, 8, 6, 9]}
  `(
    'Test removeElementsFromLinkedList1 and removeElementsFromLinkedList2 when "$list" with "$val" should return "$expected"',
    ({ list, val, expected }) => {
      const listNode = new ListNode(list[0] ?? null);
      let current = listNode;
      for (let i = 1; i < list.length; i++) {
        current.next = new ListNode(list[i]);
        current = current.next;
      }

      const listNodeResult1 = removeElementsFromLinkedList1(listNode, val);
      const listNodeResult2 = removeElementsFromLinkedList2(listNode, val);

      function getLinkedListValues(listNode: ListNode) {
        const result = [];
        let current = listNode;
        while (current) {
          if (current.val) result.push(current.val);
          current = current.next;
        }
        return result;
      }

      console.log(
        JSON.stringify(listNodeResult2),
        getLinkedListValues(listNodeResult2),
        val
      );

      expect(getLinkedListValues(listNodeResult1)).toEqual(expected);
      expect(getLinkedListValues(listNodeResult2)).toEqual(expected);
    }
  );
});
