console.clear();
// num -> -13 이 숫자가 10 이상인지 판별해서 '10이상이다.' '10 이하이다 '출력 (조건 , 절대값으로 비교)
const num = -13
const result = Math.abs(num) >= 10 ? "10 이상이다.":"10이하이다.";
console.log(result); 

//숫자를 반올림해서 짝수/홀수 구분 하여 찍기
const num2 = 4.6;
const result2 = Math.round(num2)%2 === 0 ? "짝수":"홀수";
console.log(result2); 

//난수를 발생 1~100 사이 해서 50 이상인지 미만인지 구분하여찍기.
const num3 = Math.ceil(Math.random()*100)
const result3 = num3>=50 ? "50 이상":"50미만";
console.log(result3);

//지정 숫자를 3제곱한 수를 구하시오
const num4 = 2;
// const result4 = 2**3;
const result4 = Math.pow(2,3)
console.log(result4);
/*
항목	Math.pow(2, 3)	2 ** 3
실행 속도	상대적으로 느림	더 빠름
가독성	명시적, 함수형 스타일	간결, 수학 표기 유사
호환성	오래된 브라우저 포함 O	ES2016 이상만 지원
*/

const str = '5.45';
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt("50px"));
console.log(Number("50px"));

//숫자 3개, 가장 큰값과 가장 작은값을 구하시오.

const a = 3, b = 10 , c = 5;
const bigNum = a >= b ? (a >= c ? a : c) : (b >= c ? b : c);
const smallNum = a <= b ? (a <= c ? a : c) : (b <= c ? b : c);
console.log(bigNum);
console.log(smallNum);
console.log(`가장 큰 수는 ${Math.max(a,b,c)}`);
console.log(`가장 작은 수는 ${Math.min(a,b,c)}`);

const arr =["가위","바위","보"];
console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr.at(-1));

//sum 이라는 함수를 만드세요
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(3,4));