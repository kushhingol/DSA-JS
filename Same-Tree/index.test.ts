import { TreeNode, isSameTree } from ".";

describe("Test isSameTree", () => {
  test.each`
    tree1                    | tree2                    | expected
    ${[1, null, 2, 3]}       | ${[1, 3, 2]}             | ${false}
    ${[]}                    | ${[]}                    | ${true}
    ${[1]}                   | ${[1]}                   | ${true}
    ${[1, 2]}                | ${[2, 1]}                | ${false}
    ${[1, null, 2]}          | ${[1, 2]}                | ${false}
    ${[1, 2, 3]}             | ${[2, 1, 3]}             | ${false}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${[4, 2, 5, 1, 6, 3, 7]} | ${false}
    ${[1, 2, 3]}             | ${[1, 2, 3]}             | ${true}
    ${[1, 1, 1]}             | ${[1, 1, 1]}             | ${true}
    ${[1, 2, 1]}             | ${[1, 1, 2]}             | ${false}
    ${[1, 1, 1]}             | ${[1, null, 1]}          | ${false}
  `(
    "returns $expected when $tree1 and $tree2 are given",
    ({ tree1, tree2, expected }) => {
      const treeStruct1 = new TreeNode(tree1[0]);
      const queue = [treeStruct1];
      let i = 1;

      while (i < tree1.length) {
        const node = queue.shift();
        if (node) {
          if (tree1[i] !== null && i < tree1.length) {
            node.left = new TreeNode(tree1[i]);
            queue.push(node.left);
          }
          i++;

          if (tree1[i] !== null && i < tree1.length) {
            node.right = new TreeNode(tree1[i]);
            queue.push(node.right);
          }
          i++;
        }
      }

      const treeStruct2 = new TreeNode(tree2[0]);
      const queue2 = [treeStruct2];
      let j = 1;

      while (j < tree2.length) {
        const node = queue2.shift();
        if (node) {
          if (tree2[j] !== null && j < tree2.length) {
            node.left = new TreeNode(tree2[j]);
            queue2.push(node.left);
          }
          j++;

          if (tree2[j] !== null && j < tree2.length) {
            node.right = new TreeNode(tree2[j]);
            queue2.push(node.right);
          }
          j++;
        }
      }
      expect(isSameTree(treeStruct1, treeStruct2)).toBe(expected);
    }
  );
});
