console.clear();

//변수 a, b 에 각각 숫자를 받아서 더하기 나누기 곱하기 빼기 
let a = 5 ;
let b = 10 ;

let result = a + b;
console.log(result);

result = b - a;
console.log(result);

result = a * b;
console.log(result);

result = b / a;
console.log(result);

//\머지 연산자
console.log( 5 % 4);

//거듭 제곱
console.log( 5 ** 4);

// 비교연산자
let a_ = 3;
let b_ = 5;

console.log(a_ > b_);
console.log(a_ >= b_);
console.log(a_ < b_);
console.log(a_ <= b_);
console.log(a_ == b_);
console.log(a_ != b_);

let c_ = '5';
console.log( c_ == b_); // 값만 비교
console.log( c_ === b_); // 데이터타입까지 비교
console.log( c_ !== b_); // 데이터타입까지 비교

let number = 5;
// 만약에 number가 짝수라면 '짝수', 홀수라면 '홀수' 출력하고 싶다.
if(number % 2 === 0){
    console.log("짝수");
}else{
    console.log("홀수");
}