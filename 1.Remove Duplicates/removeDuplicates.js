/*
    26. Remove Duplicates from Sorted Array
*/

// var removeDuplicates = function(nums) {
//     let pointerA = 0
//     let pointerB = 1
//     let length = nums.length
//     let k = 0

//     for(let i = 0; i < length; i++) {
//         if (nums[pointerA] === nums[pointerB]) {
//             nums.splice(pointerB, 1)
//             // nums.push(null)
//             k = nums.length
//         } else if(nums[pointerA] !== nums[pointerB]) {
//             pointerB++
//             pointerA = pointerB-1
//         }
//     }
//     // return k, nums
//     console.log(nums)
// };

// console.log(removeDuplicates([1,1,2]))


var removeDuplicates = function(nums){
    let k = 1
    for(let i = 1; i < nums.length; i ++){
        if(nums[i] === nums[i-1]) {
            
        } else {
            nums[k] = nums[i]
            k++;
        } 
    }
    // console.log(count,nums.slice(0, count))
    return k;
}

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])