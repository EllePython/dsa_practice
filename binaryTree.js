// https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/555/

// Pseudocode problem: You have the root of the tree what is the depth/length of the longest node

var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;

};

module.exports = maxDepth;