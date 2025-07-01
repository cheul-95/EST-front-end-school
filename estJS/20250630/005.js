const statusCode = 400;
switch (statusCode) {
    case 200:
        console.log(`성공입니다.`);
        break;
    case 400:
        console.log(`페이지를 찾을 수 없습니다.`);
        break;
    case 500:
        console.log(`서버 오류 입니다.`);
        break;
    default:
        console.log(`알수없는 오류입니다.`);
        break;
}

// 유저의 Role을 판단해서 출력하는 구문을 만드시오.
// admin -> `관리자님 안녕하세요.`, user -> `회원님 안녕하세요`, guest -> `게스트 화면입나다`
// 그외의 경우는 페이지를 보는 권한이 없습니다.
const Role = "admin";
switch (Role) {
    case "admin":
        console.log(`관리자님 안녕하세요.`);
        break;
    case "user":
        console.log(`회원님 안녕하세요.`);
        break;
    case "guest":
        console.log(`게스트 화면입니다.`);
        break;
    default:
        console.log(`페이지를 보는 권한이 없습니다.`);
        break;
}

//date 객체
const today = new Date();
console.log(today.toISOString().split("T")[0]);
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const date = today.getDate().toString().padStart(2, "0");
let day = today.getDay();
console.log(`${year}-${month}-${date},${day}`);
let week;
switch (day) {
    case 0:
        week = "Sunday";
        break;
    case 1:
        week = "Monday";
        break;
    case 2:
        week = "Tuesday";
        break;
    case 3:
        week = "Wednesday";
        break;
    case 4:
        week = "Thursday";
        break;
    case 5:
        week = "Friday";
        break;
    case 6:
        week = "Saturday";
        break;
}
console.log(`Today is ${week}`);

let hours = today.getHours();
const minute = String(today.getMinutes()).padStart(2, "0");
let meridium = hours > 12 ? "PM" : "AM";
hours = hours > 12 ? hours % 12 : hours;
console.log(String(hours).padStart(2, "0") + " : " + minute + " " + meridium);
