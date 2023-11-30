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

export const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const result = [];
  function traverse(node: TreeNode | null) {
    if (node?.left) traverse(node.left);
    result.push(node.val);
    if (node?.right) traverse(node.right);
  }
  traverse(root);

  return result;
};

export const inorderTraversal2 = (root: TreeNode | null): number[] => {
  if (!root) return [];

  return [
    ...inorderTraversal2(root.left),
    root.val,
    ...inorderTraversal2(root.right),
  ];
};
