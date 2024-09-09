import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field({nullable: true})
    id: string;

    @Field({nullable: true})
    title: string;
    
    @Field({nullable: true})
    content: string;
    
    @Field({nullable: true})
    authorId: string;
    
    @Field({nullable: true})
    createdAt: Date;
    
    @Field({nullable: true})
    updatedAt: Date;
}