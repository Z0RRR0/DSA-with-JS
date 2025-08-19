// var reverseStr = function(s, k) {
//     let arr = s.split('');
//     if ( k === arr.length) {
//         for (let i = 0; i < arr.length/2; i++) {
//         temp = arr[i]
//         arr[i] = arr[k - i - 1]
//         arr[k - i - 1] = temp;
//         }
//         return arr.join('');
//     }

//     if (k < arr.length) {
//         for (let i = 0; i < arr.length; i += 2 * k) {
//         temp = arr[i]
//         arr[i] = arr[k + i - 1]
//         arr[k + i - 1] = temp;
//         }
//         return arr.join('');
//     }else {
//         return arr.join('');
//     }
// };

let reverse = (arr, i, j) => {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    
}
var reverseStr = function(s, k) {
    let arr = s.split('');
    let i = 0;
    let n = arr.length;
    while (i < n) {
        let j = Math.min(i + k - 1, n - 1);
        reverse(arr, i, j);
        i += 2 * k;
    }
    return arr.join('');
}

console.log(reverseStr("abcdefg", 2)); // Output: "bacdfeg"
console.log(reverseStr("abcdefg", 4)); // Output: "dbcaefg"
console.log(reverseStr("abcd", 2)); // Output: "bacd"
console.log(reverseStr("abcd", 4)); // Output: "dcba"