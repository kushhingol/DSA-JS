import { TreeNode, averageOfLevel } from ".";

describe("Test Average of level in binary tree functionality", () => {
  test.each`
    root                                                                   | expected
    ${[3, 9, 20, null, null, 15, 7]}                                       | ${[3, 14.5, 11]}
    ${[3, 9, 20, 15, 7]}                                                   | ${[3, 14.5, 11]}
    ${[3, 9, 20, 15, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}             | ${[3, 14.5, 9.75, 13.5]}
    ${[3, 9, 20, 15, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} | ${[3, 14.5, 9.75, 13.5, 19]}
    ${[]}                                                                  | ${[]}
    ${[3]}                                                                 | ${[3]}
    ${[3, 9]}                                                              | ${[3, 9]}
    ${[3, 9, 20]}                                                          | ${[3, 14.5]}
    ${[1, null, 2, null, 3, null, 4, null, 5]}                             | ${[1, 2, 3, 4, 5]}
  `("averageOfLevel($root) should return $expected", ({ root, expected }) => {
    const tree = new TreeNode(root[0]);
    let i = 1;
    let queue: TreeNode[] = [];
    queue.push(tree);
    while (i < root.length) {
      const node = queue.shift();
      if ((root[i] !== undefined && root[i]) !== null) {
        node.left = new TreeNode(root[i]);
        queue.push(node.left);
      }
      i++;
      if (root[i] !== undefined && root[i] !== null) {
        node.right = new TreeNode(root[i]);
        queue.push(node.right);
      }
      i++;
    }

    expect(averageOfLevel(tree)).toEqual(expected);
  });
});
