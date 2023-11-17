// You are given an array of integers, each integer appears twice except for one, find the one.
// The solution should run in the shortest amount of time(the quickest)
// Questions: An example of a linear runtime complexity?
// Question: What is a constant extra  space?

const onlyOnce = function(nums) {
    const hash = {};

    for (const once of nums){
        if (!hash[once]) {
            hash[once] = 1;
        }
    }
    return Object.keys(hash)[0];
};

// Edge Cases: 

// Pseudocode: I will be using a hash table to track each number in the array. Line 7 is the hash table element 
// that will be stored in the 'nums' array I created. Line 9 is a for loop that will itireate over each element
// in the array. Line 10 checks if the current element is not presented in the hash table, if it's not present it 
// adds the value of 1. The loop continues to itireate until the array and all the elements have been processed.
// Line 14 returns the only element in the hash table that appears only once in the array. 