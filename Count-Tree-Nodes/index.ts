export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    if (!val) return;
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const countNodes = (root: TreeNode | null): number => {
  if (!root) return 0;

  let counter = 0;

  function traverseTree(node: TreeNode | null) {
    if (node?.left) traverseTree(node.left);
    if (node?.val !== null || node?.val !== undefined) counter += 1;
    if (node?.right) traverseTree(node.right);
  }

  traverseTree(root);

  return counter;
};
