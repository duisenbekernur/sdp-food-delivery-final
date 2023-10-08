export interface IAuthenticationStrategy {
  authenticate(username: string, password: string): boolean;
  register(
    username: string,
    fullName: string,
    email: string,
    coursesEnrolled: string[] | null
  );
}
