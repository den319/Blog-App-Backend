import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class CreatePostDto {
    @Field()
    @IsNotEmpty({message: "Title of post is required!"})
    @IsString({message: "Title must be a string!"})
    title: string;

    @Field()
    @IsNotEmpty({message: "Content is required!"})
    @IsString({message: "Content must be a string!"})
    content: string;

    @Field()
    @IsNotEmpty({message: "AutherId is required!"})
    @IsString({message: "AutherId must be a string!"})
    authorId: string;
}

@InputType()
export class UpdatePostDto {
    @Field({nullable: true})
    @IsOptional()
    @IsString({message: "Title must be a string!"})
    title?: string;

    @Field({nullable: true})
    @IsOptional()
    @IsString({message: "Content must be a string!"})
    content?: string;

    @Field()
    @IsNotEmpty({message: "postId is required!"})
    @IsString({message: "postId must be a string!"})
    id: string;
}

@InputType()
export class DeletePostDto {
    @Field()
    @IsNotEmpty({message: "postId is required!"})
    @IsString({message: "postId must be a string!"})
    id: string;   
}

@InputType()
export class FeedPostsDto {
    @Field({nullable: true})
    @IsOptional()
    @IsString({message: "AutherId must be a string!"})
    authorId?: string;

    @Field()
    @IsNumber()
    skip: number;

    @Field()
    @IsNumber()
    take: number;
}
