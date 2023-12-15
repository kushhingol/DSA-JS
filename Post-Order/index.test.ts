import { TreeNode, postorderTraversalMain } from ".";

describe("Test Post order traversal", () => {
  test.each`
    root                              | expected
    ${[1, null, 2, 3]}                | ${[3, 2, 1]}
    ${[]}                             | ${[]}
    ${[1]}                            | ${[1]}
    ${[1, 2]}                         | ${[2, 1]}
    ${[1, null, 2]}                   | ${[2, 1]}
    ${[1, 2, 3]}                      | ${[2, 3, 1]}
    ${[1, 2, null, 3]}                | ${[3, 2, 1]}
    ${[1, null, 2, 3, 4]}             | ${[3, 4, 2, 1]}
    ${[1, 2, 3, 4]}                   | ${[4, 2, 3, 1]}
    ${[1, 2, 3, 4, null, null, 5]}    | ${[4, 2, 5, 3, 1]}
    ${[1, 2, 3, 4, null, null, 5, 6]} | ${[6, 4, 2, 5, 3, 1]}
  `("postorderTraversalMain($root) -> $expected", ({ root, expected }) => {
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

    expect(postorderTraversalMain(treeStruct1)).toEqual(expected);
  });
});
