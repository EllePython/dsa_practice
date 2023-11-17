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