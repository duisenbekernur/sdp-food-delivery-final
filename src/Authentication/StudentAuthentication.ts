import { IAuthenticationStrategy } from "./auth.strategy";
import User from "../models/User";
import Student from "../models/Student";

class StudentAuthentication implements IAuthenticationStrategy {
  authenticate(username: string, password: string): boolean {
    return true;
  }

  register(
    username: string,
    fullName: string,
    email: string,
    coursesEnrolled: string[] | null
  ) {
    const student = new Student(username, fullName, email, 'student', coursesEnrolled);

    console.log("student registered:", student.getStatus());

    return student;
  }
}

export default StudentAuthentication;
