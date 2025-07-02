const blood = "bloodType";

const user = {
    name: "Ghost",
    [blood]: "B",
    [3 + 5]: 8,
    ["best" + "Friend"]: "Irangi",
};

console.log(blood, user.bloodType, user[8], user.bestFriend);
