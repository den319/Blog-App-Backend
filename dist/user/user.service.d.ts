import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/user.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUser(dto: GetUserDto): Promise<{
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
