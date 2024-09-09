import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, DeletePostDto, FeedPostsDto, UpdatePostDto } from './dto/post.dto';
export declare class PostService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createPost(dto: CreatePostDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePost(dto: UpdatePostDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deletePost(dto: DeletePostDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getFeedOfposts(dto: FeedPostsDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
