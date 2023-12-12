import { TreeNode, isSymmetricTree } from ".";

describe("Symmetric-Tree", () => {
  test.each`
    root                           | expected
    ${[1, 2, 2, 3, 4, 4, 3]}       | ${true}
    ${[1, 2, 2, null, 3, null, 3]} | ${false}
    ${[]}                          | ${true}
    ${[1]}                         | ${true}
  `("isSymmetricTree($root) should return $expected", ({ root, expected }) => {
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
    expect(isSymmetricTree(treeStruct1)).toEqual(expected);
  });
});
