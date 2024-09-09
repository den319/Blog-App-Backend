import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "src/post/post.types";

@ObjectType()
export class User {
    @Field({nullable: true})
    id?: string;

    @Field({nullable: true})
    firstName?: string;

    @Field({nullable: true})
    lastName?: string;

    @Field({nullable: true})
    userName?: string;

    @Field()
    email: string;

    @Field({nullable: true})
    createdAt?: Date;

    @Field({nullable: true})
    updatedAt?: Date;
}

@ObjectType()
export class UserInfo {
    @Field({nullable: true})
    user?: User;

    @Field(() => [Post], {nullable: true})
    posts?: [Post];
}