import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class LoginDto {
    
    @Field()
    @IsNotEmpty({message: "Email is required!"})
    @IsEmail({}, {message: "Email must be a valid!"})
    email: string;
    
    @Field()
    @IsNotEmpty({message: "Password is required!"})
    @MinLength(6, {message: "Password must be atleast 6 characters!"})
    password: string;
}

