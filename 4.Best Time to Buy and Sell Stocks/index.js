/*
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let buy = Infinity;
//     let sell = -Infinity;
//     let maxProfit = 0
//     for(let i = 0; i < prices.length; i++) {
//         let profit = 0
//         if(prices[i] < buy) {
//             buy = prices[i];
//             sell = -Infinity
//         } else if(prices[i] > sell) {
//             sell = prices[i];
//         }
//         if(buy !== Infinity && sell !== -Infinity) {
//             profit = sell - buy
//             if(maxProfit < profit) maxProfit = profit
//         }
//     }
//     return maxProfit;
// };



// ----CLEAN-VERSION----

var maxProfit = function(prices) {
    let buy = Infinity;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]);

        profit = Math.max(profit, prices[i] - buy)
    }

    return profit;
}


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,4,1]))
console.log(maxProfit([2,1,2,1,0,1,2]))
console.log(maxProfit([1,2]))
console.log(maxProfit([2,1,2,0,1]))