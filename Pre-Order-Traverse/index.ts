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

function* preOrderTraversal(root: TreeNode | null) {
  if (root) {
    yield root.val;
    yield* preOrderTraversal(root.left);
    yield* preOrderTraversal(root.right);
  }
}

export const preorderTraversalMain = (root: TreeNode | null): number[] => {
  return [...preOrderTraversal(root)];
};
