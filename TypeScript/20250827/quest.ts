// // 1. 인터페이스 기본 - 사용자 정보 인터페이스
// interface User {
//     name: string;
//     age: number;
//     email?: string;
// }
// const user1: User = {
//     name: "김철수",
//     age: 25,
// };
// const user2: User = {
//     name: "이영희",
//     age: 30,
//     email: "younghee@example.com",
// };
// console.log(user1);
// console.log(user2);
// //2. 인터페이스 확장 - 관리자 인터페이스
// interface Admin extends User {
//     permissions: string[];
// }
// const admin: Admin = {
//     name: "박관리자",
//     age: 35,
//     email: "admin@example.com",
//     permissions: ["read", "write", "delete"],
// };
// console.log(admin);
// //3. 제네릭 기본 - 응답 래퍼 함수
// // 성공/실패를 나타내는 응답 타입
// interface ApiResponse<T> {
//     success: boolean;
//     data?: T;
//     message?: string;
// }

// // 제네릭 함수 createResponse를 완성하세요
// // 성공시: success: true, data 포함
// // 실패시: success: false
// function createResponse<T>(data: T | null, success: boolean, message?: string): ApiResponse<T> {
//     // 함수 내용을 구현하세요
//     return success ? { success: success, data: data as T } : { success: success };
// }
// // 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
// const userResponse = createResponse({ name: "홍길동", age: 20 }, true);
// const errorResponse = createResponse<User>(null, false, "사용자를 찾을 수 없습니다");
// console.log(userResponse);
// console.log(errorResponse);

//5. Partial, Pick, Omit 활용 - 사용자 업데이트
interface FullUser {
    id: number;
    name: string;
    age: number;
    email: string;
    password?: string;
    createdAt: Date;
}
const user1: CreateUserData = {
    name: "위니브",
    age: 100,
    email: "test@test.com",
    password: "qwer1234!@",
};
const user2: UpdateUserData = {
    name: "위니브",
    age: 100,
    email: "test@test.com",
    password: "qwer1234!@",
    createdAt: new Date(),
};
const user3: FullUser = {
    id: 0,
    name: "위니브",
    age: 100,
    email: "test@test.com",
    password: "qwer1234!@",
    createdAt: new Date(),
};
const user4: LoginData = {
    email: "test@test.com",
    password: "qwer1234!@",
};

// 함수들을 구현하세요
let id = 0;
function createUser(userData: CreateUserData): FullUser {
    return {
        id: ++id,
        ...userData,
        createdAt: new Date(),
    };
}
function getPublicProfile(user: FullUser): PublicUser {
    // 구현하세요
    const { password, ...Profile } = user;
    return Profile;
}
// 1. 사용자 생성시 필요한 정보만 받는 타입 (id, createdAt 제외)
/* Omit을 사용하여 정의하세요 */
type CreateUserData = Omit<FullUser, "id" | "createdAt">;
console.log(createUser(user1));

// 2. 사용자 업데이트시 부분적으로 수정 가능한 타입 (id 제외)
/* Partial과 Omit을 조합하여 정의하세요 */
type UpdateUserData = Omit<Partial<FullUser>, "id">;
console.log(user2);

// 3. 공개 프로필용 타입 (password 제외)
/* Omit을 사용하여 정의하세요 */
type PublicUser = Omit<FullUser, "password">;
console.log(getPublicProfile(user3));

// 4. 로그인 정보만 담는 타입
type LoginData = Pick<FullUser, "email" | "password">;
console.log(user4);

//6. 타입 가드 - 동물 구분하기
interface Dog {
    type: "dog";
    name: string;
    breed: string;
    bark(): void;
}

interface Cat {
    type: "cat";
    name: string;
    color: string;
    meow(): void;
}

interface Bird {
    type: "bird";
    name: string;
    canFly: boolean;
    chirp(): void;
}

type Animal = Dog | Cat | Bird;

// 타입 가드 함수들을 구현하세요
function isDog(animal: Animal): animal is Dog {
    // 구현하세요
    return (animal as Dog).type == "dog";
}

function isCat(animal: Animal): animal is Cat {
    // 구현하세요
    return (animal as Cat).type == "cat";
}

function isBird(animal: Animal): animal is Bird {
    // 구현하세요
    return (animal as Bird).type == "bird";
}

// 동물의 소리를 내는 함수를 구현하세요
function makeSound(animal: Animal): void {
    // 타입 가드를 사용하여 각 동물에 맞는 소리 메서드를 호출하세요
    if (isDog(animal)) {
        animal.bark();
    } else if (isCat(animal)) {
        animal.meow();
    } else if (isBird(animal)) {
        animal.chirp();
    }
}

// 사용 예시
const dog: Dog = { type: "dog", name: "멍멍이", breed: "골든리트리버", bark: () => console.log("멍멍!") };
const cat: Cat = { type: "cat", name: "야옹이", color: "검정", meow: () => console.log("야옹!") };
const bird: Bird = { type: "bird", name: "짹짹이", canFly: true, chirp: () => console.log("짹짹!") };

makeSound(dog); // 멍멍!
makeSound(cat); // 야옹!
makeSound(bird); // 짹짹!
