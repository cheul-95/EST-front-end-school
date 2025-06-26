console.clear();
let a = 10;
let b = 5;
let c = 3;

//1. a와 b 두수를 비교해서 , 큰수를 출력하시오 
console.log(a > b ? "큰수는 a 입니다.":"큰수는 b 입니다.")
//2. c가 짝수인지 , 홀수인지 출력하세요
console.log(c%2==0?"짝수":"홀수");
//3. b의 값에 a를 더하는 식을 쓰세요.
b = b + a;
b = b - a; // 초기화
console.log(b);
b += a;
console.log(b);
b -= a; // 초기화
//4. b가 a의 약수 인지 확인하세요.
console.log(a%b==0?"약수":"약수 아님")

const userId = "Ghost";
const userPw = "1234";

const inputId = "Hello";
const inputPw = "0000";
//아이디 일치하는지 .
let result ;
if(userId === inputId){
    console.log("id가 존재합니다");
    if(userPw === inputPw){
        console.log('로그인 성공');
    }
    else{
        console.log('비밀번호 ');
    }
}else{
    console.log("존재하지 않는 아아디 입니다.");
} 