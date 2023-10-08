import User from "./User";

class Teacher extends User {
  constructor(username: string, fullName: string, email: string, role: string, coursesEnrolled: string[] | null) {
    super(username, fullName, email, role, coursesEnrolled);
  }

  public getStatus(): string {
    return "I am teacher";
  }
}

export default Teacher;