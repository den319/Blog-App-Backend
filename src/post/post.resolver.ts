import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.types';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/guard';
import { CreatePostDto, DeletePostDto, FeedPostsDto, UpdatePostDto } from './dto/post.dto';

@Resolver()
export class PostResolver {
    constructor(
        private postService: PostService,
    ) {}

    @Mutation(() => Post)
    @UseGuards(AuthGuard)
    async createPost(@Args("createSinglePost") dto: CreatePostDto) {
        return this.postService.createPost(dto);
    }

    @Mutation(() => Post)
    @UseGuards(AuthGuard)
    async updatePost(@Args("updateSinglePost") dto: UpdatePostDto) {
        return this.postService.updatePost(dto);
    }

    @Mutation(() => Post)
    @UseGuards(AuthGuard)
    async deletePost(@Args("deleteSinglePost") dto: DeletePostDto) {
        return this.postService.deletePost(dto);
    }

    @Mutation(() => [Post])
    async getPostFeed(
        @Context() context: any,
        @Args("feedOfPostsInput", {nullable: true}) dto: FeedPostsDto
    ) { 
        console.log(context.req.userId);

        const userId= context.req?.user?.id || null;

        return this.postService.getFeedOfposts({...dto, authorId: userId});
    }
}
