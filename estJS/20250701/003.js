const arr = [1, 2, 3];
arr.push(4);
arr.splice(2, 1);
// console.log(arr);

function isValidName(name) {
    const friendIndex = friends.indexOf(name);
    if (friendIndex === -1) {
        console.log(`${name}은 친구 항목에 없습니다.`);
        return false;
    }

    return friendIndex;
}

let friends = [];
function addFriend(name) {
    const index = isValidName(name);
    if (index !== false) {
        console.log(`${name}은 이미 친구입니다.`);
        return;
    }
    friends.push(name);
}

function deleteFriend(name) {
    const friendIndex = isValidName(name);
    if (friendIndex === false) return;
    friends.splice(friendIndex, 1);
}

function updateFriend(name, newName) {
    const friendIndex = isValidName(name);
    if (friendIndex === false) return;
    friends[friendIndex] = newName;
    console.log(`${name}의 이름이 ${newName}으로 수정되었습니다.`);
}

addFriend("Ghost");
addFriend("Irangi");
addFriend("Camel");
updateFriend("Ghost", "Ghost1");
addFriend("Ghost");
addFriend("Ghost");
deleteFriend("Camel1");
console.log(`my Friends : ${friends}`);
