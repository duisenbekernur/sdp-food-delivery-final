import TeacherAuthentication from "./src/Authentication/TeacherAuthentication";
import StudentAuthentication from "./src/Authentication/StudentAuthentication";
import UserManager from "./src/models/UserManager";

const teacherExample = new TeacherAuthentication();
const studentExample = new StudentAuthentication();

const userManager = UserManager.getInstance();
const userManagerClone = UserManager.getInstance();

userManager.setStrategy(teacherExample);
// const isAuthenticatedTeacher = userManager.authenticateUser(
//   "teacher",
//   "teacherPassword"
// );
const teacher = userManager.registerUser(
  "best_teacher",
  "Olga Petrovna",
  "u4ilka_petrovna@gmail.com",
  "teacher",
  null
);

console.log("from index.ts: ", teacher);

console.log();
console.log("================================================================");
console.log();

userManager.setStrategy(studentExample);
const student = userManager.registerUser(
  "best_student",
  "Duysenbek Yernur",
  "yernurdyn_po4tasy@gmail.com",
  "student",
  ["software design patterns"]
);

console.log("from index.ts: ", teacher);

// console.log("isAuthenticatedTeacher", isAuthenticatedTeacher);
// console.log("isAuthenticatedStudent", isAuthenticatedStudent);

// console.log("Singleton: ", userManager === userManagerClone);
