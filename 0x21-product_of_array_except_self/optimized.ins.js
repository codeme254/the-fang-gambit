/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefixRunningProduct = 1, postfixRunningProduct = 1;
    let answer = [];
    for (let i = 0; i < nums.length; i++){
        answer.push(prefixRunningProduct);
        prefixRunningProduct *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--){
        answer[i] = answer[i] * postfixRunningProduct;
        postfixRunningProduct *= nums[i];
    }
    return answer;
};
