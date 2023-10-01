export interface IAuthenticationStrategy {
    authenticate(username: string, password: string): boolean;
}