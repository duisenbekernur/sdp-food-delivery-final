import {IAuthenticationStrategy} from "./auth.strategy";

class TeacherAuthentication implements IAuthenticationStrategy {
    authenticate(username: string, password: string): boolean {
        return true;
    }
}

export default TeacherAuthentication