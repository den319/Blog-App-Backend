import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';
import * as bycrypt from "bcrypt";
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/user.types';


@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtSerivce: JwtService,
        private configService: ConfigService,
    ) {}

    async createToken(userId: string, email: string): Promise<any> {
        const payload= {
            sub: userId,
            email,
        }

        const secret= await this.configService.get("JWT_SECRET");

        const token= await this.jwtSerivce.signAsync(payload, {
            secret: secret,
            expiresIn: "60m",
        });

        return token;
    }

    async register(dto: SignupDto) {
        const user= await this.prismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        if(user) throw new BadRequestException("This email has already been taken!");

        const hash= await bycrypt.hash(dto.password, 10);

        const newUser= await this.prismaService.user.create({
            data: {
                ...dto,
                password: hash,
            }
        });

        if(!newUser) throw new BadRequestException("Something went wrong! Please try again...");

        return newUser;
    }

    async login(dto: LoginDto) {
        const user= await this.prismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        if(!user) throw new BadRequestException("Email does not exists!");

        const passwordMatch= await bycrypt.compare(dto.password, user.password);

        if(!passwordMatch) throw new BadRequestException("Incorrect password!")

        const token= await this.createToken(user.id, user.email);

        // console.log({...user, accessToken: token});

        const mappedUser: User= {
            ...user,
        }

        return {
            user: mappedUser,
            accessToken: token,
        };
    }
}
