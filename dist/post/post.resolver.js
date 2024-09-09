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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_service_1 = require("./post.service");
const post_types_1 = require("./post.types");
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard/guard");
const post_dto_1 = require("./dto/post.dto");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    async createPost(dto) {
        return this.postService.createPost(dto);
    }
    async updatePost(dto) {
        return this.postService.updatePost(dto);
    }
    async deletePost(dto) {
        return this.postService.deletePost(dto);
    }
    async getPostFeed(context, dto) {
        console.log(context.req.userId);
        const userId = context.req?.user?.id || null;
        return this.postService.getFeedOfposts({ ...dto, authorId: userId });
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, graphql_1.Mutation)(() => post_types_1.Post),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("createSinglePost")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_types_1.Post),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("updateSinglePost")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_types_1.Post),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("deleteSinglePost")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.DeletePostDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => [post_types_1.Post]),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)("feedOfPostsInput", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, post_dto_1.FeedPostsDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getPostFeed", null);
exports.PostResolver = PostResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
//# sourceMappingURL=post.resolver.js.map