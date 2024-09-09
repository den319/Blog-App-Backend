import { UserService } from './user.service';
import { GetUserDto } from './dto/user.dto';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    GetUserProfile(dto: GetUserDto): Promise<{
        user: {
            posts: {
                id: string;
                title: string;
                content: string;
                authorId: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
            id: string;
            firstName: string;
            lastName: string;
            userName: string;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        };
        posts: {
            id: string;
            title: string;
            content: string;
            authorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
