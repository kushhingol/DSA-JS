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

export const binaryTreePaths = (root: TreeNode | null): string[] => {
  if (!root) return [];
  if (!root.left && !root.right) return [`${root.val}`];

  const result = [];

  function traverseTreePaths(node: TreeNode, prevPath?: string) {
    if (!node) return;
    const currentPath = prevPath ? `${prevPath}->${node.val}` : `${node.val}`;
    if (!node.left && !node.right) result.push(currentPath);
    if (node.left) traverseTreePaths(node.left, currentPath);
    if (node.right) traverseTreePaths(node.right, currentPath);
  }

  traverseTreePaths(root);

  return result;
};
