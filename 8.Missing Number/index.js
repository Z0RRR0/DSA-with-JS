// var missingNumber = function(nums) {
//     nums.sort((a,b) => a-b)

//     let min = nums[0]
//     let max = nums.length
    
//     let pointer = min

//     if(min === max) {
//         if(min === 0) {
//             return min + 1
//         } else {
//             return min - 1
//         }
//     }

//     for(let i = min; i < max; i++) {
//         if(min === 0) {
//             if(nums[i + 1] - 1 !== nums[i]) {
//                 return nums[i] + 1
//             }
//         } else {
//             return min - 1
//         }

//         pointer++
//     }

//     return pointer
// };

var missingNumber = function(nums) {
    let expectedSum = (nums.length * (nums.length+1)) / 2

    let totalSum = 0
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }

    return expectedSum - totalSum
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([1]))
console.log(missingNumber([0]))
console.log(missingNumber([1,2]))
console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))