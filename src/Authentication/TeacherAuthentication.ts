import { IAuthenticationStrategy } from "./auth.strategy";
import User from "../models/User";
import Teacher from "../models/Teacher";

class TeacherAuthentication implements IAuthenticationStrategy {
  authenticate(username: string, password: string): boolean {
    return true;
  }

  register(
    username: string,
    fullName: string,
    email: string,
    coursesEnrolled: string[] | null
  ) {
    const teacher = new Teacher(username, fullName, email, "teacher", coursesEnrolled)

    console.log("teacher registered:", teacher.getStatus());

    return teacher
  }
}

export default TeacherAuthentication;
