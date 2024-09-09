import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/user.types';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Request } from '@nestjs/common';
import { LoginResponse } from './auth.types';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Query(() => String)
    hello() {
        return "hello";
    }

    @Mutation(() => User)
    async register(@Args("signupInput") dto: SignupDto) {
        return this.authService.register(dto);
    }

    @Mutation(() => LoginResponse)
    async login(@Args("loginInput") dto: LoginDto) {
        return this.authService.login(dto);
    }
}
