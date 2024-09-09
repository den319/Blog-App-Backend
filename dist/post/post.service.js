"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = class PostService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createPost(dto) {
        const post = await this.prismaService.post.create({
            data: {
                ...dto,
            },
        });
        if (!post)
            throw new common_1.BadRequestException("Something went wrong! Please try again...");
        return post;
    }
    async updatePost(dto) {
        const post = await this.prismaService.post.findUnique({
            where: {
                id: dto.id,
            },
        });
        if (!post)
            throw new common_1.BadRequestException("Wrong PostId");
        const updatedPost = await this.prismaService.post.update({
            where: {
                id: dto.id,
            },
            data: {
                title: dto.title,
                content: dto.content,
            },
        });
        if (!updatedPost)
            throw new common_1.BadRequestException("Something went wrong! Please try again...");
        return updatedPost;
    }
    async deletePost(dto) {
        const post = await this.prismaService.post.findUnique({
            where: {
                id: dto.id,
            },
        });
        if (!post)
            throw new common_1.BadRequestException("Wrong PostId");
        const deletedPost = await this.prismaService.post.delete({
            where: {
                id: dto.id,
            },
        });
        if (!deletedPost)
            throw new common_1.BadRequestException("Something went wrong! Please try again...");
        return deletedPost;
    }
    async getFeedOfposts(dto) {
        const feed = await this.prismaService.post.findMany({
            where: {
                authorId: dto.authorId ? {
                    not: dto.authorId,
                } : { not: undefined },
            },
            orderBy: {
                createdAt: "desc",
            },
            skip: dto.skip,
            take: dto.take,
        });
        return feed;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map