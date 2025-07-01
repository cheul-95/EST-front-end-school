const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) continue;
    console.log(nums[i]);
}

let result = [];
for (let i = 0; i < nums.length; i++) {
    if (i % 2) continue;
    result.push(nums[i]);
}
console.log(result);
