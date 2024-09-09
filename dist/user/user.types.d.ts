import { Post } from "src/post/post.types";
export declare class User {
    id?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class UserInfo {
    user?: User;
    posts?: [Post];
}
