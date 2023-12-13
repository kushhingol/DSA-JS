import { TreeNode, maxDepth } from ".";

describe("Test Max-Depth", () => {
  test.each`
    root                                                             | expected
    ${[3, 9, 20, null, null, 15, 7]}                                 | ${3}
    ${[1, null, 2]}                                                  | ${2}
    ${[]}                                                            | ${0}
    ${[0]}                                                           | ${1}
    ${[1, 2, 3, 4, 5]}                                               | ${3}
    ${[1, 2, 3, 4, 5, 6]}                                            | ${3}
    ${[1, 2, 3, 4, 5, 6, 7]}                                         | ${3}
    ${[1, 2, 3, 4, 5, 6, 7, 8]}                                      | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}                                   | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}                               | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}                           | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}                       | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}                   | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}               | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}           | ${4}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null, 16]} | ${5}
  `("maxDepth($root) should return $expected", ({ root, expected }) => {
    let treeStruct1: TreeNode | null = null;
    if (root.length === 0) {
      treeStruct1 = null;
    } else {
      treeStruct1 = new TreeNode(root[0]);
      const queue = [treeStruct1];
      let i = 1;

      while (i < root.length) {
        const node = queue.shift();
        if (node) {
          if (root[i] !== null && i < root.length) {
            node.left = new TreeNode(root[i]);
            queue.push(node.left);
          }
          i++;

          if (root[i] !== null && i < root.length) {
            node.right = new TreeNode(root[i]);
            queue.push(node.right);
          }
          i++;
        }
      }
    }

    expect(maxDepth(treeStruct1)).toBe(expected);
  });
});
