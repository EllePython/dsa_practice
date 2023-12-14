// Problem: There is a singly-linked list head and we want to delete a node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed that the given node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. 

// pseudocode: You have a list with unique elements 
// and have to delete a specific node in it with no access to the first 
// node and the last node isn't guaranteed to be the last node, delete the node but 
// don't permanentely remove it

var deleteNode = function (node) {
    nextNode = node.next;
    nodeVal = nextNode.val;
}