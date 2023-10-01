import {IAuthenticationStrategy} from "./auth.strategy";
import {UserData} from "./shared/types";

class UserManager {
    private static instance: UserManager | null = null;
    private users: Array<UserData>;

    private authenticationStrategy: IAuthenticationStrategy | null = null;

    constructor() {
        this.users = new Array<UserData>();
    }

    public static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    public setStrategy(strategy: IAuthenticationStrategy): void {
        this.authenticationStrategy = strategy;
    }

    public addUser(userData: UserData): void {
        this.users.push(userData);
    }

    public getUser(username: string): UserData | undefined {
        return this.users.find(user => user.username === username);
    }

    public authenticateUser(username: string, password: string): boolean {
        return this.authenticationStrategy!.authenticate(username, password);
    }
}

export default UserManager