class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    eat() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이난다.`);
    }
}

class GrilledSausage extends Sausage {
    eat() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이난다. 불맛도 난다!`);
    }
}
const sausage = new Sausage("소고기", "파");
sausage.eat();
// 소고기와 파 맛이 난다!

const grilled = new GrilledSausage("닭고기", "떡");
grilled.eat();
