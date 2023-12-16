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

export const invertBinaryTree = (root: TreeNode | null): TreeNode => {
  if (!root) return null;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
  const temp = root.left;
  root.right = root.left;
  root.left = temp;

  return root;
};
