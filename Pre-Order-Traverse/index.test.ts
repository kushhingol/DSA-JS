import { TreeNode, preorderTraversalMain } from ".";

describe("Pre-Order-Traverse", () => {
  test.each`
    root                                 | expected
    ${[1, null, 2, 3]}                   | ${[1, 2, 3]}
    ${[]}                                | ${[]}
    ${[1]}                               | ${[1]}
    ${[1, 2]}                            | ${[1, 2]}
    ${[1, null, 2]}                      | ${[1, 2]}
    ${[1, 2, 3]}                         | ${[1, 2, 3]}
    ${[1, 2, null, 3]}                   | ${[1, 2, 3]}
    ${[1, null, 2, 3, 4]}                | ${[1, 2, 3, 4]}
    ${[1, 2, 3, 4]}                      | ${[1, 2, 4, 3]}
    ${[1, 2, 3, 4, null, null, 5]}       | ${[1, 2, 4, 3, 5]}
    ${[1, 2, 3, 4, null, null, 5, 6]}    | ${[1, 2, 4, 6, 3, 5]}
    ${[1, 2, 3, 4, null, null, 5, 6, 7]} | ${[1, 2, 4, 6, 7, 3, 5]}
  `("preorderTraversalMail($root) -> $expected", ({ root, expected }) => {
    const treeStruct1 = new TreeNode(root[0]);
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

    expect(preorderTraversalMain(treeStruct1)).toEqual(expected);
  });
});
