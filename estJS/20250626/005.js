const ko = 100;
const en = 80;
const math = 70;
const avg = (ko + en + math )/3;
if(ko>=60 && en>=60 && math>=60 && avg>=70){
    console.log("합격");
}else{
    console.log("불합격");
}