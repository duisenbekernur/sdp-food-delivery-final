import TeacherAuthentication from "./TeacherAuthentication";
import StudentAuthentication from "./StudentAuthentication";
import UserManager from "./UserManager";

const teacherExample = new TeacherAuthentication();
const studentExample = new StudentAuthentication();

const userManager = UserManager.getInstance();
const userManagerClone = UserManager.getInstance()

userManager.setStrategy(teacherExample);
const isAuthenticatedTeacher = userManager.authenticateUser("teacher", "teacherPassword");

userManager.setStrategy(studentExample)
const isAuthenticatedStudent = userManager.authenticateUser("student", "studentPassword");

console.log('isAuthenticatedTeacher', isAuthenticatedTeacher);
console.log('isAuthenticatedStudent', isAuthenticatedStudent);

console.log('Singleton: ', userManager === userManagerClone);