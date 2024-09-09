import { User } from 'src/user/user.types';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    hello(): string;
    register(dto: SignupDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(dto: LoginDto): Promise<{
        user: User;
        accessToken: any;
    }>;
}
