export interface UserData {
    id: number;
    username: string;
    fullName: string;
    email: string;
    role: UserRole;
    coursesEnrolled: string[];
}

export enum UserRole {
    Student = "student",
    Teacher = "teacher",
    Admin = "admin",
}