var removeElement = function(nums, val) {
    const n = nums.length
    if (nums.length < 1) return nums

    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {

        } else {
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums)
};

removeElement([3,2,2,3], 3)