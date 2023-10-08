import Student from "./Student";

class User {
  static id: number = 0;
  public username: string;
  public fullName: string;
  public email: string;
  public role: string;
  public coursesEnrolled: string[] | null;

  constructor(username: string, fullName: string, email: string, role: string, coursesEnrolled: string[] | null) {
    User.id++;
    console.log("================ id", User.id);
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.role = role;
    this.coursesEnrolled = coursesEnrolled;
  }

  public getStatus(): string {
    return "This is a user";
  }

}

export default User;
