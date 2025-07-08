function orderCoffee(coffeeName, callback) {
    console.log("준비 중...");
    callback(coffeeName);
}
orderCoffee("아메리카노", function makeCoffee(coffeeName) {
    console.log(`커피가 준비되었습니다: ${coffeeName}`);
});
function sumUpTo(n) {
    if (n == 0) {
        return 0;
    } else if (n < 0) {
        return n + sumUpTo(n + 1);
    }
    return n + sumUpTo(n - 1);
}
console.log(sumUpTo(5));
