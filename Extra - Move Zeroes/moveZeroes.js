var moveZeroes = function(nums) {
    if(nums.length < 1) {
        return nums
    }
    let j = 0
    let num = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            num = nums[i]
            nums[i] = nums[j]
            nums[j] = num
            j++
        } else {

        }
    }

    return nums
};
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([5,1,0,3,12]))