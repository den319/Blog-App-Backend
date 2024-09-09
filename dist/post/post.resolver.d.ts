import { PostService } from './post.service';
import { CreatePostDto, DeletePostDto, FeedPostsDto, UpdatePostDto } from './dto/post.dto';
export declare class PostResolver {
    private postService;
    constructor(postService: PostService);
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
    getPostFeed(context: any, dto: FeedPostsDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
