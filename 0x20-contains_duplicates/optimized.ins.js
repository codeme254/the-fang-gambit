/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length != new Set(nums).size
};

console.log(containsDuplicate([1, 2, 2, 4, 5]));
