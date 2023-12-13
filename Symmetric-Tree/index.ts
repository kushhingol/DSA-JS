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

export const isSymmetricTree = (root: TreeNode | null): boolean => {
  if (!root) return true;
  if (!root.left && !root.right) return true;

  function isMirror(tree1: TreeNode, tree2: TreeNode) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;

    return (
      tree1?.val === tree2?.val &&
      isMirror(tree1.left, tree2.right) &&
      isMirror(tree1.right, tree2.left)
    );
  }

  return isMirror(root, root);
};
