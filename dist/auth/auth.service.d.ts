import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/user.types';
export declare class AuthService {
    private prismaService;
    private jwtSerivce;
    private configService;
    constructor(prismaService: PrismaService, jwtSerivce: JwtService, configService: ConfigService);
    createToken(userId: string, email: string): Promise<any>;
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
