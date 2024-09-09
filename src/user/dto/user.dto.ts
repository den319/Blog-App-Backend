import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class GetUserDto {
    @Field()
    @IsNotEmpty({message: "Id is required!"})
    @IsString()
    id: string;
}