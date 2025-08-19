var reverseString = function(s) {
    let temp = '';
    for (let i = 0; i < s.length/2; i++) {
        temp = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = temp;
    }
    return s
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // Output: ['o', 'l', 'l', 'e', 'h']
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // Output: ['h', 'a', 'n', 'n', 'a', 'H']