import { TreeNode, hasPathSum } from ".";

describe("Test haspathsum", () => {
  test.each`
    root                     | sum  | expected
    ${[]}                    | ${0} | ${false}
    ${[1]}                   | ${1} | ${true}
    ${[1, 2]}                | ${1} | ${false}
    ${[1, 2]}                | ${3} | ${true}
    ${[1, 2, 3]}             | ${3} | ${true}
    ${[1, 2, 3]}             | ${4} | ${true}
    ${[1, 2, 3]}             | ${5} | ${false}
    ${[1, 2, 3]}             | ${6} | ${false}
    ${[1, 2, 3]}             | ${7} | ${false}
    ${[1, 2, 3]}             | ${8} | ${false}
    ${[1, 2, 3]}             | ${9} | ${false}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${1} | ${false}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${2} | ${false}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${7} | ${true}
  `(
    "hasPathSum($root, $sum) should return $expected",
    ({ root, sum, expected }) => {
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

      expect(hasPathSum(treeStruct1, sum)).toEqual(expected);
    }
  );
});
