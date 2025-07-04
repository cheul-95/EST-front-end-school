import { user1, user2 } from "../data/user.js";

const { age, name, skills = "NO skills", personal } = user1;
console.log(age, name, skills, personal);
const { age: newAge, name: newName, skills: newSkills = "NO skills" } = user2;
console.log(newAge, newName, newSkills, personal);
