import { user1, user2 } from "../data/user.js";

const { age, name, skills = "NO skills" } = user1;
console.log(age, name, skills);
const { age: newAge, name: newName, skills: newSkills = "NO skills" } = user2;
console.log(newAge, newName, newSkills);
