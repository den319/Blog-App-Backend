export declare class CreatePostDto {
    title: string;
    content: string;
    authorId: string;
}
export declare class UpdatePostDto {
    title?: string;
    content?: string;
    id: string;
}
export declare class DeletePostDto {
    id: string;
}
export declare class FeedPostsDto {
    authorId?: string;
    skip: number;
    take: number;
}
