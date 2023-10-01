import {IAuthenticationStrategy} from "./auth.strategy";

class StudentAuthentication implements IAuthenticationStrategy {
    authenticate(username: string, password: string): boolean {
        return true;
    }
}

export default StudentAuthentication