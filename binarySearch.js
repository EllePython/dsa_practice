// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target
// in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// pseudocode problem: In a array that is sorted in an ascending form of integers there is a target that exist
// I am to create a function to search if the target exist in the array, if the target exist it will return the index
// if not it will return -1

// Binary search divides the search space in half until the target value is found

var search = function(nums, target) {
    let left = O;
    let right = nums.length-1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(nums[mid]=== target){
            return mid;
        }

        if(nums[mid]<target){
            left = mid+1
        }else{
            right= mid-1
        }
        
    }
    return -1;
};