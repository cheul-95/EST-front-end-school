console.clear();
/*
if(조건식)
' ' 공백있는 문자역 => true;
'' 공백없는 문자열 => false;
null => false;
undefined -> flase;
*/
var a = true;
a = "";
if(a){
    console.log("true");
}else{
    console.log("false");
}
//삼항 연사자 -> 조건식 ? 참 : 거짓;
a == null ?  console.log("true") :  console.log("false"); 
a % 2 == 0 ?  console.log("짝수") :  console.log("홀수"); 

//90점 이상 A  미만 과락
const scole1 = 89;
let result1; 
if(scole1 >= 90){
    result1 = "A";
}else{
    result1 = "D";
}
console.log(result1);
//90점 이상 A /70점 이상 B /50점 이상 C /70 미만 과락
const scole2 = 50;
let result2; 
if(scole2 >= 90){
    result2 = "A";
}else if(scole2 >= 70){
    result2 = "B";
}else if(scole2 >= 50){
    result2 = "C";
}else{
    result2 = "D";
}
console.log(result2);