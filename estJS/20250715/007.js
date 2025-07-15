//순환 참조
function func1() {
    const x = {};
    const y = {};
    x.obj = y;
    y.obj = x;
}
func1();

const originArray = [1, 2, 3, 4, 5];

function addElement(newElement) {
    return [...originArray, newElement];
}

const newArray = addElement(6);
console.log(originArray);
console.log(newArray);

const weniv = ["라이캣", "빙키", "개리", "지지"];
const newWeniv = weniv.map((el) => el + "💖");
console.log(weniv);
console.log(newWeniv);

//엄격모드 사용하기
