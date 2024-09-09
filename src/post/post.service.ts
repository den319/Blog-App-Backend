import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, DeletePostDto, FeedPostsDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
    constructor(private prismaService: PrismaService) {}

    async createPost(dto: CreatePostDto) {
        const post= await this.prismaService.post.create({
            data: {
                ...dto,
            },
        });

        if(!post) throw new BadRequestException("Something went wrong! Please try again...");

        return post;
    }

    async updatePost(dto:UpdatePostDto) {
        const post= await this.prismaService.post.findUnique({
            where: {
                id: dto.id,
            },
        });

        if(!post) throw new BadRequestException("Wrong PostId");

        const updatedPost= await this.prismaService.post.update({
            where: {
                id: dto.id,
            },
            data: {
                title: dto.title,
                content: dto.content,
            },
        });

        if(!updatedPost) throw new BadRequestException("Something went wrong! Please try again...");

        return updatedPost;
    }

    async deletePost(dto: DeletePostDto) {
        const post= await this.prismaService.post.findUnique({
            where: {
                id: dto.id,
            },
        });

        if(!post) throw new BadRequestException("Wrong PostId");
        
        const deletedPost= await this.prismaService.post.delete({
            where: {
                id: dto.id,
            },
        });

        if(!deletedPost) throw new BadRequestException("Something went wrong! Please try again...")
        
        return deletedPost;
    }

    async getFeedOfposts(dto: FeedPostsDto) {
        // console.log(dto.authorId);

        const feed= await this.prismaService.post.findMany({
            where: {
                authorId: dto.authorId ? {
                    not: dto.authorId,
                } : {not: undefined},
            },
            orderBy: {
                createdAt: "desc",
            },
            skip: dto.skip,
            take: dto.take,
        });

        // console.log(feed);

        return feed;
    }
}
