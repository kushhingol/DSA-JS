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

function* postOrderTraversal(root: TreeNode | null) {
  if (root) {
    yield* postOrderTraversal(root.left);
    yield* postOrderTraversal(root.right);
    yield root.val;
  }
}

export const postorderTraversalMain = (root: TreeNode | null): number[] => {
  return [...postOrderTraversal(root)];
};
