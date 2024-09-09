import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInfo } from './user.types';
import { GetUserDto } from './dto/user.dto';

@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}
    
    @Mutation(() => UserInfo)
    async GetUserProfile(@Args("queryUserProfile") dto: GetUserDto) {
        return this.userService.getUser(dto);
    }

}
