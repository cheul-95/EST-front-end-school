const users = [
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];
const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

const userRole = users
    .filter((x) => x.role.toLowerCase().includes("admin"))
    .map((x) => x.nickName)
    .sort((a, b) => a.localeCompare(b));
console.log(userRole);

const userCnt = users.filter((x) => x.role.includes("user")).length;
console.log(userCnt);

const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

const tagslist = [];
tagslist.push(posts.map((x) => x.tags));
console.log(tagslist.flat(2).join(", "));
