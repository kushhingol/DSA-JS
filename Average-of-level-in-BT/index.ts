export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const averageOfLevel = (root: TreeNode | null): number[] => {
  if (!root || !root.val) return [];

  let queue: TreeNode[] = [];
  const averageOutput: number[] = [];
  queue.push(root);

  while (queue.length) {
    // resetting the sum to zero to sum up all the node values of the current level nodes
    let sum = 0;

    // created a nextNodes array to store the next level nodes
    const nextNodes: TreeNode[] = [];

    // loop through the current level nodes and sum up the values and push the next level nodes to the nextNodes array
    for (let node of queue) {
      sum += node.val ? node.val : 0;
      if (node.left) nextNodes.push(node.left);
      if (node.right) nextNodes.push(node.right);
    }

    // calculate the average of the current level nodes and push it to the averageOutput array
    const avg = sum / queue.length;
    averageOutput.push(avg);

    // assign the nextNodes array to the queue to loop through the next level nodes
    queue = nextNodes;
  }

  return averageOutput;
};
