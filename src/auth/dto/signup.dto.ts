import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

@InputType()
export class SignupDto {
    @Field()
    @IsNotEmpty({message: "First name is required!"})
    @IsString({message: "First name must be a string!"})
    firstName: string;

    @Field()
    @IsNotEmpty({message: "Last name is required!"})
    @IsString({message: "Last name must be a string!"})
    lastName: string;

    @Field()
    @IsNotEmpty({message: "UserName name is required!"})
    @IsString({message: "UserName name must be a string!"})
    userName: string;

    @Field()
    @IsNotEmpty({message: "Password is required!"})
    @MinLength(6, {message: "Password must be atleast 6 characters!"})
    password: string;

    @Field()
    @IsNotEmpty({message: "Email is required!"})
    @IsEmail({}, {message: "Email must be a valid!"})
    email: string;
}