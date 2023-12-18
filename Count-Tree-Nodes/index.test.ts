import { TreeNode, countNodes } from ".";

describe("Test Count Tree Nodes", () => {
  test.each`
    root                        | expected
    ${[1, 2, 3, 4, 5, 6]}       | ${6}
    ${[]}                       | ${0}
    ${[1]}                      | ${1}
    ${[1, 2]}                   | ${2}
    ${[1, 2, 3]}                | ${3}
    ${[1, 2, 3, 4]}             | ${4}
    ${[1, 2, 3, 4, 5]}          | ${5}
    ${[1, 2, 3, 4, 5, 6]}       | ${6}
    ${[1, 2, 3, 4, 5, 6, 7]}    | ${7}
    ${[1, 2, 3, 4, 5, 6, 7, 8]} | ${8}
  `("countNodes(${root}) should return $expected", ({ root, expected }) => {
    if (root.length === 0) expect(countNodes(null)).toBe(expected);
    else {
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

      expect(countNodes(tree)).toBe(expected);
    }
  });
});
