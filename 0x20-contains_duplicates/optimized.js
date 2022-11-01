/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let lookUp = {};
    for (let i = 0; i < nums.length; i++){
        if(lookUp[nums[i]]) return true;
        lookUp[nums[i]] = 1;
    }
    return false;
};
