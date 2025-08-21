var merge = function(nums1, m, nums2, n) {
    let arr = nums1.slice(0, m).concat(nums2.slice(0, n));
    arr.sort((a,b) => a - b);

    for (let  i = 0; i < arr.length; i++) {
        nums1[i] = arr[i]
    }
    nums1.length = arr.length;
};

let nums1 = [1,2,3,0,0,0]
merge(nums1, 3, [2,5,6], 3)
console.log(nums1)

// merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3)
// merge(nums1 = [1], m = 1, nums2 = [], n = 0)
// merge(nums1 = [0], m = 0, nums2 = [1], n = 1)