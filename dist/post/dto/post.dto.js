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
exports.FeedPostsDto = exports.DeletePostDto = exports.UpdatePostDto = exports.CreatePostDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePostDto = class CreatePostDto {
};
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Title of post is required!" }),
    (0, class_validator_1.IsString)({ message: "Title must be a string!" }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Content is required!" }),
    (0, class_validator_1.IsString)({ message: "Content must be a string!" }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "AutherId is required!" }),
    (0, class_validator_1.IsString)({ message: "AutherId must be a string!" }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "authorId", void 0);
exports.CreatePostDto = CreatePostDto = __decorate([
    (0, graphql_1.InputType)()
], CreatePostDto);
let UpdatePostDto = class UpdatePostDto {
};
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Title must be a string!" }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Content must be a string!" }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "postId is required!" }),
    (0, class_validator_1.IsString)({ message: "postId must be a string!" }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "id", void 0);
exports.UpdatePostDto = UpdatePostDto = __decorate([
    (0, graphql_1.InputType)()
], UpdatePostDto);
let DeletePostDto = class DeletePostDto {
};
exports.DeletePostDto = DeletePostDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "postId is required!" }),
    (0, class_validator_1.IsString)({ message: "postId must be a string!" }),
    __metadata("design:type", String)
], DeletePostDto.prototype, "id", void 0);
exports.DeletePostDto = DeletePostDto = __decorate([
    (0, graphql_1.InputType)()
], DeletePostDto);
let FeedPostsDto = class FeedPostsDto {
};
exports.FeedPostsDto = FeedPostsDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "AutherId must be a string!" }),
    __metadata("design:type", String)
], FeedPostsDto.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FeedPostsDto.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FeedPostsDto.prototype, "take", void 0);
exports.FeedPostsDto = FeedPostsDto = __decorate([
    (0, graphql_1.InputType)()
], FeedPostsDto);
//# sourceMappingURL=post.dto.js.map