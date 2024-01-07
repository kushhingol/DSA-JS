import { TreeNode, minDepth } from ".";

describe("Test Min-Depth-Binary-Tree", () => {
  test.each`
    root                                       | expected
    ${[3, 9, 20, null, null, 15, 7]}           | ${2}
    ${[2, null, 3, null, 4, null, 5, null, 6]} | ${5}
    ${[0]}                                     | ${1}
    ${[1, 2]}                                  | ${2}
    ${[1, 2, 3, 4, 5]}                         | ${2}
    ${[1, 2, 3, 4, null, null, 5]}             | ${3}
    ${[1, 2, 3, 4, 5, 6, 7]}                   | ${3}
    ${[1, 2, 3, 4, 5, 6, 7, 8]}                | ${3}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}             | ${3}
  `(
    "minDepth function should return $expected when root is $root",
    ({ root, expected }) => {
      const tree = new TreeNode(root[0]);
      const queue = [tree];
      let i = 1;

      while (i < root.length) {
        const node = queue.shift();
        if (node) {
          if (root[i] !== null) {
            node.left = new TreeNode(root[i]);
            queue.push(node.left);
          }
          i++;
          if (root[i] !== null) {
            node.right = new TreeNode(root[i]);
            queue.push(node.right);
          }
          i++;
        }
      }
      expect(minDepth(tree)).toBe(expected);
    }
  );
});
