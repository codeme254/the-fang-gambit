// this is a leetcode solution where the target is strictly zero.
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    console.log(nums);
    const triplets = [];
    let i=0, left = 0, right = nums.length - 1;
    while (i < nums.length - 1){
        left = i + 1, right = nums.length - 1;
        while (left < right){
            const sum = nums[i] + nums[left] + nums[right];
            // console.log(nums[i], nums[left], nums[right], sum);
            if (sum == 0){
                triplets.push([nums[i], nums[left], nums[right]]);
                left++, right--;

                // while(left < right && nums[left] === nums[left - 1]) left++;
                // while(left < right && nums[right] === nums[right + 1]) right++;
            }else if(sum < 0) left++;
            else if(sum > 0) right--;
        }
        i++;
    }

    // removes duplicate arrays.
    // return Array.from(new Set(triplets.map(JSON.stringify)), JSON.parse)
};
// console.log(threeSum([-2,0,0,2,2]));
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
