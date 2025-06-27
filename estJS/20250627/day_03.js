const height = [150, 169, 185, 170];
const ghost = 167;

console.log(height.filter((x) => ghost <= x).length);

const words = ["hello", "ghost", "apple", "grape", "Lemon"];
console.log(words.filter((x) => x.includes("l") || x.includes("L")));
