import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.types";

@ObjectType()
export class LoginResponse {
    @Field({nullable: true})
    user?: User;
        
    @Field({nullable: true})
    accessToken?: string;
}