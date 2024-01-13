import { TreeNode, binaryTreePaths } from ".";

describe("Test Binary Tree Paths", () => {
  test.each`
    root                     | expected
    ${[1, null, 2, 3]}       | ${["1->2->3"]}
    ${[1]}                   | ${["1"]}
    ${[1, 2]}                | ${["1->2"]}
    ${[1, null, 2]}          | ${["1->2"]}
    ${[1, 2, 3]}             | ${["1->2", "1->3"]}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${["1->2->4", "1->2->5", "1->3->6", "1->3->7"]}
  `("returns $expected when $tree is given", ({ root, expected }) => {
    const tree = new TreeNode(root[0]);
    const queue = [tree];
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

    expect(binaryTreePaths(tree)).toEqual(expected);
  });
});
