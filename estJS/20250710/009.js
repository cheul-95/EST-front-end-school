// localStorage: 브라우저 데이터를 영구적으로 저장하는 방식
// => 사용자가 직접 지우지 않는 한, 데이터는 브라우저를 껐다 켜도 그대로 남아있습니다.
// ex: 로그인 여부, 로그인 방식, 다크모드 설정 등

// 데이터 저장
localStorage.setItem("isLogin", false);
localStorage.setItem("color-theme", "dark");

// 데이터 저장(객체 형식) -> JSON.stringify()를 사용한 변환이 필요하다!
const user = {
    id: 1,
    name: "유진",
};

localStorage.setItem("user", JSON.stringify(user));

// 데이터 가져오기 => 숫자, 불리언, 객체도 문자열로 저장되기 때문에 형변환에 주의해야 한다!!!
const isLogin = localStorage.getItem("isLogin");
console.log("isLogin: ", isLogin); // 불리언값 형변환 필요
const theme = localStorage.getItem("color-theme");
console.log("theme: ", theme);

const userStorage = localStorage.getItem("user");
console.log(JSON.parse(userStorage));

// 2. 세션 스토리지: 브라우저 세션 동안만 데이터를 저장하는 방법
// => 브라우저를 닫으면 데이터가 삭제된다. 데이터의 지속성이 로컬 스토리지와 다름.

// 데이터 저장
sessionStorage.setItem("session", 1);
sessionStorage.setItem("user", JSON.stringify(user));

// 데이터 가져오기
console.log("session: ", sessionStorage.getItem("session"));

const userStorage2 = sessionStorage.getItem("user");
console.log("user: ", JSON.parse(userStorage2));

// 값 지우기
sessionStorage.removeItem("user");
// sessionStorage.clear();
