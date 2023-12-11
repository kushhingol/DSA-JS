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

export const isSameTree = (tree1: TreeNode, tree2: TreeNode): boolean => {
  if (!tree1 && !tree2) return true;

  if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  );
};
