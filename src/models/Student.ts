import { IAuthenticationStrategy } from "../Authentication/auth.strategy";
import User from "./User";

class Student extends User {
  constructor(username: string, fullName: string, email: string, role: string, coursesEnrolled: string[] | null) {
    super(username, fullName, email, role, coursesEnrolled);
  }

  public getStatus(): string {
    return "I am student";
  }
}

export default Student;
