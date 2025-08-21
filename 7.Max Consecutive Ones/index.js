var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;                 // increase streak
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;               // reset streak
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))